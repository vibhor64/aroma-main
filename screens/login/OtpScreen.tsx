import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StatusBar, Image } from 'react-native';
import { OtpInput } from "react-native-otp-entry";
import { isSignedIn } from '../../utils/Store';
import { useRecoilState } from 'recoil';

const OtpScreen = ({ route }) => {
    // Destructure the params object from the route
    const navigation = useNavigation();
    const [SignedIn, setSignedIn] = useRecoilState(isSignedIn);
    const { phoneNumber } = route.params;
    const [text, setText] = React.useState('');

    const sendMessage = () => {
        console.log('OTP sent! ' + text)
        if (text != '1234') {
            alert('Invalid OTP')
        } else {
            // Navigate to the Home screen if user already registered
            // setSignedIn(true);
            navigation.navigate('NameScreen');
        }
    }

    useEffect(() => {
        if (text.length === 4) {
            sendMessage();
        }
    }, [text]);

    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <Image style={{ width: 130, height: 130, position: 'absolute', top: 0, right: 0 }} source={require('../../assets/icons/login page/r1.jpg')} />
            <View style={{ marginTop: 100, marginHorizontal: 20 }}>

                <Text style={{ fontSize: 30, fontFamily: 'Poppins_700Bold', color: '#E23DA0' }}>Verify OTP</Text>
                <Text style={{ fontSize: 14, fontFamily: 'Poppins_600SemiBold', }}>Enter OTP sent to your phone number: <Text style={{ color: '#E23DA0', textDecorationLine: 'underline' }}>
                    {phoneNumber}</Text></Text>
            </View>

            {/* <TextInput
                style={{ height: 40, borderColor: '#DCADAD', borderWidth: 1, marginHorizontal: 20, paddingHorizontal: 10, borderRadius: 10, marginTop: 20 }}
                value={text}
                // onSubmitEditing={() => {
                //     if (text.length === 4) {
                //       sendMessage();
                //     }
                //   }}
                placeholder="Enter OTP"
                placeholderTextColor="gray"
                textContentType='oneTimeCode'
                keyboardType='number-pad'
                maxLength={4}
                autoFocus={true}
                autoComplete='sms-otp'
                onChangeText={(text) => {
                    setText(text);
                }}
            /> */}

            <OtpInput
                numberOfDigits={4}
                focusColor="#E23DA0"
                // focusStickBlinkingDuration={500}
                onTextChange={(text) => console.log(text)}
                onFilled={(text) => setText(text)}
                theme={{
                    containerStyle: {marginHorizontal: 20, margin: 20},
                }}
            />
            <TouchableOpacity onPress={sendMessage}>

                <Text style={{ color: "white", backgroundColor: "#E23DA0", padding: 8, borderRadius: 10, textAlign: "center", fontSize: 14, fontFamily: 'Poppins_700Bold', marginTop: 30, marginHorizontal: 20, overflow: 'hidden' }}>Next</Text>
            </TouchableOpacity>


        </View>
    );
};

export default OtpScreen;
