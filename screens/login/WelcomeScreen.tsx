import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { isSignedIn } from '../../utils/Store';
import { useRecoilState } from 'recoil';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { Fonts } from '../../fonts';
import { useFonts } from 'expo-font';
import Loader from '../../Loader';
import { ArrowUpRightIcon } from "react-native-heroicons/solid";
import { useNavigation } from '@react-navigation/native';

const WelcomeScreen = () => {
    const [SignedIn, setSignedIn] = useRecoilState(isSignedIn);
    const navigation = useNavigation();
    // Load fonts
    const [fontLoaded] = Fonts();
    let [fontsLoaded] = useFonts({
        'Italiana': require('../../assets/fonts/Italiana.ttf'),
    });

    if (!fontsLoaded) {
        return <Loader />;
    }

    if (!fontLoaded) {
        return <Loader />;
    }

    return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff'  }}>
                <Image source={require('../../assets/icons//login page/heartRibbon.png')} resizeMode='contain' style={{ width: '100%', position: 'absolute', top: 50,  height: '50%'}} />
                {/* <View style={{alignItems: 'flex-start', padding: 40, marginTop: 180, width: '100%', height: 200}}> */}
                <View style={{alignItems: 'flex-start', padding: 40, width: '100%', position: 'absolute', bottom: 58, }}>
                <Text style={{ fontFamily: 'Italiana', fontSize: 46, color: '#E23DA0',}}>Aroma</Text>
                <Text style={{ fontFamily: 'Poppins_600SemiBold', fontSize: 26, color: 'black',marginTop: 10}}>Dating App exclusively for MUJ</Text>
                <Text style={{ fontFamily: 'Poppins_600SemiBold', fontSize: 12, color: 'black',marginTop: 10}}>A free and open sourced program made with love by the <Text style={{color: '#E23DA0', textDecorationLine: 'underline'}}>MUJ community.</Text></Text>
                <TouchableOpacity style={{flexDirection: 'row', backgroundColor: '#E23DA0', paddingVertical: 10, paddingHorizontal: 20, borderRadius: 10, marginTop: 20}} onPress={() => navigation.navigate('Login')}>
                    <Text style={{fontFamily: 'Poppins_600SemiBold', fontSize: 12, color: 'white'}}>Get Started</Text>
                    <ArrowUpRightIcon color='white' size={18} style={{marginLeft: 10}} />
                </TouchableOpacity>


                
                </View>
            </View>
    )
}

export default WelcomeScreen