import { View, Text, Platform, TextInput, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil';
import { isSignedIn } from '../../utils/Store';
import { userState } from '../../utils/Store';
import { OtpInput } from "react-native-otp-entry";

const OutlookScreen = () => {
  const [signedIn, setSignedIn] = useRecoilState(isSignedIn);
  const [user, setUser] = useRecoilState(userState);
  const { outlook } = user;
  const [validEmail, setValidEmail] = useState(false);
  const [otp, setOTP] = useState('');
  const [otpSent, setOtpSent] = useState(false);

  const updateEmail = (newEmail: string) => {
    setUser((prevUser) => ({ ...prevUser, outlook: newEmail }));
    setValidEmail(validateExpression(newEmail));
  };
  function validateExpression(input: string): boolean {
    const regex = /^[a-zA-Z]+\.(\d{9})$/;
    return regex.test(input);
  }

  const sendOTP = () => {
    setOtpSent(true);
  }

  useEffect(() => {
    if (otp.length === 6) {
      verifyOTP();
    }
}, [otp]);

const verifyOTP = () => {
  if (otp !== '123456') {
    alert('Wrong OTP!');
    return;
  }
  setSignedIn(true);
}

  return (
    <View style={{ flex: 1, padding: 20, paddingTop: 60, backgroundColor: '#fff' }}>
      <Text style={{ fontSize: 32, fontFamily: 'Poppins_700Bold', color: '#E23DA0' }}>Outlook Verification</Text>
      <Text style={{ fontSize: 11, fontFamily: 'Poppins_600SemiBold', color: '#000' }}>Verify you are from Manipal University Jaipur. This will help us improve the authenticity of the platform. <Text style={{ textDecorationLine: 'underline' }}>Do NOT add the domain name,</Text> we have done it for you.</Text>

      <View style={{ flexDirection: 'row', width: '100%', alignSelf: 'center', padding: 15, borderWidth: 2, borderColor: '#E23DA0', borderRadius: 10, marginTop: 20, alignItems: 'center', paddingBottom: 8 }}>
        <TextInput
          value={outlook}
          style={{ fontFamily: 'Poppins_600SemiBold', fontSize: 12, color: 'black', textAlignVertical: 'top', backgroundColor: 'white', width: '55%', }}
          numberOfLines={1}
          onChangeText={(email: string) => updateEmail(email)}
          placeholder={'Outlook email'}
          placeholderTextColor={'#bababa'}
          autoFocus={true}
          autoCapitalize='none'
        />
        <Text style={{ fontFamily: 'Poppins_600SemiBold', fontSize: 12, color: '#000', position: 'absolute', right: 5, textAlignVertical: 'center' }}>@muj.manipal.edu</Text>
      </View>

      <TouchableOpacity activeOpacity={0.4} style={{ marginTop: 20, alignSelf: 'center', width: '90%' }} onPress={() => sendOTP()} disabled={!validEmail}>
        <Text style={{ paddingHorizontal: 20, paddingVertical: 10, fontSize: 12, fontFamily: 'Poppins_800ExtraBold', color: '#fff', backgroundColor: validEmail ? '#0089BA' : '#bababa', borderRadius: Platform.OS == 'android' ? 30 : 20, textAlign: 'center', overflow: 'hidden', elevation: 4, shadowColor: "#000000",shadowOffset: { width: 0, height: 3, }, shadowOpacity: 0.17, shadowRadius: 3.05, }}>Send OTP</Text>
      </TouchableOpacity>

      {otpSent && (
        <>
          <OtpInput
            numberOfDigits={6}
            focusColor="#E23DA0"
            // focusStickBlinkingDuration={500}
            onTextChange={(text) => console.log(text)}
            onFilled={(text) => setOTP(text)}
            theme={{
              containerStyle: { marginHorizontal: 20, margin: 20, marginTop: 40 },
            }}
          />
          <TouchableOpacity onPress={() => verifyOTP()} activeOpacity={0.4}>
            <Text style={{ color: "white", backgroundColor: "#E23DA0", padding: 8, borderRadius: Platform.OS == 'android' ? 30 : 20, textAlign: "center", fontSize: 14, fontFamily: 'Poppins_700Bold', marginTop: 10, marginHorizontal: 10, overflow: 'hidden'}}>Verify OTP</Text>
          </TouchableOpacity>
        </>)}
    </View>
  )
}

export default OutlookScreen