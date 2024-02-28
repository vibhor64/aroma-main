import { View, Text, TouchableOpacity, Image, BackHandler, StyleSheet } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { ArrowUpRightIcon } from "react-native-heroicons/solid";
import PhoneInput from "react-native-phone-number-input";
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
    const navigation = useNavigation();
    const [value, setValue] = useState("");
    const [formattedValue, setFormattedValue] = useState("");
    const [valid, setValid] = useState(false);
    // const [showMessage, setShowMessage] = useState(false);
    const phoneInput = useRef<PhoneInput>(null);
    
    // Disable Back Button
    // useEffect(() => {
    //     const backHandler = BackHandler.addEventListener(
    //         'hardwareBackPress',
    //         () => {
    //             // Returning true will prevent the default back button behavior
    //             // (e.g., going back to the previous screen)
    //             return true;
    //         }
    //     );

    //     // Clean up the event listener when the component is unmounted
    //     return () => backHandler.remove();
    // }, []);


    return (
        <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#fff',  }}>
            <View style={{  }}>
            <Text style={{ fontFamily: 'Italiana', fontSize: 46, color: '#E23DA0', marginTop: 100 }}>Aroma</Text>
            <Image source={require('../../assets/icons/login page/aa.png')} style={{ width: 40, height: 40, marginTop: 10, position: 'absolute', right: 0, top: 90, zIndex: -10 }} />
            <Text style={{ fontFamily: 'Poppins_500Medium', fontSize: 16, color: 'black', marginTop: 10 }}>Sign in to continue</Text>
            </View>

            <View style={styles.container}>
                <SafeAreaView style={styles.wrapper}>
                    <PhoneInput
                        ref={phoneInput}
                        defaultValue={value}
                        defaultCode="IN"
                        layout="first"
                        // disableArrowIcon={true}
                        textInputStyle={{ fontFamily: 'Poppins_500Medium', fontSize: 15, color: '#000' }}
                        codeTextStyle={{fontFamily: 'Poppins_500Medium', fontSize: 15}}
                        containerStyle={{
                            borderRadius: 20,}}
                        flagButtonStyle={{
                            borderRadius: 20}}
                        textContainerStyle={{
                            borderRadius: 20,}}
                        
                            countryPickerButtonStyle={{  }}
                        // placeholder=' '
                        onChangeText={(text) => {
                            setValue(text);
                        }}
                        onChangeFormattedText={(text) => {
                            setFormattedValue(text);
                        }}
                        // withDarkTheme
                        withShadow
                        // autoFocus
                    />
                    {/* Check if the phone number is valid */}
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            const checkValid = phoneInput.current?.isValidNumber(value);
                            setValid(checkValid ? checkValid : false);
                            if (checkValid){
                                navigation.navigate("OtpScreen", {
                                    phoneNumber: value,
                                })
                            }
                            else if (!checkValid){
                                alert("Please enter a valid phone number")
                            }
                        }}
                    >
                        <Text style={{ color: "white", backgroundColor: "#E23DA0", padding: 10, borderRadius: 10, textAlign: "center", fontSize: 16, fontFamily: 'Poppins_500Medium', overflow: 'hidden' }}>Continue</Text>
                    </TouchableOpacity>
                </SafeAreaView>
            </View>

            <View style={{ width: '85%', alignItems: 'center', flex: 1, justifyContent: 'flex-end', marginBottom: 40 }}>
                    <Text style={{ fontSize: 12, fontFamily: 'Poppins_500Medium', color: '#000' }}>By continuing, you agree to our 
                        <Text style={{color: '#E23DA0'}}> Terms of Service</Text> and 
                        <Text style={{color: '#E23DA0'}}> Privacy Policy.</Text></Text>
                </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 90,
        justifyContent: "center",
        alignItems: "center",
    },
    wrapper: {
        width: "100%",
    },
    message: {
        fontSize: 17,
    },
    button: {
        paddingTop: 20,
    },
})

export default LoginScreen