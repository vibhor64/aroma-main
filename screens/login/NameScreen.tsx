import { View, Text, TouchableOpacity, Image, TextInput, Switch, Button, ScrollView, BackHandler, KeyboardAvoidingView, Platform } from 'react-native'
import React, { useEffect, useState } from 'react'
import * as ImagePicker from 'expo-image-picker';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import FaceDetection from "react-native-face-detection";
import { useRecoilState } from 'recoil';
import { userState } from '../../utils/Store';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';

const NameScreen = () => {
    // const [image, setImage] = useState(``)
    // const [text, setText] = useState('');
    // const [dob, setDob] = useState('')
    // const [gender, setGender] = useState('')
    // const [isEnabled, setIsEnabled] = useState(true);
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [face, setFace] = useState(false)
    const [user, setUser] = useRecoilState(userState);
    const { image, name, showNameOnProfile, gender, dob, age, bio } = user;
    const navigation = useNavigation();

    const updateName = (newName) => {
        setUser((prevUser) => ({ ...prevUser, name: newName }));
    };
    const updateImage = (newName) => {
        setUser((prevUser) => ({ ...prevUser, image: newName }));
    };
    const updateShowNameOnProfile = (newName) => {
        setUser((prevUser) => ({ ...prevUser, showNameOnProfile: newName }));
    };
    const updateGender = (newName) => {
        setUser((prevUser) => ({ ...prevUser, gender: newName }));
    };
    const updateDob = (newName) => {
        setUser((prevUser) => ({ ...prevUser, dob: newName }));
    };
    const updateAge = (newName) => {
        setUser((prevUser) => ({ ...prevUser, age: newName }));
    };
    const updateBio = (newName) => {
        setUser((prevUser) => ({ ...prevUser, bio: newName }));
    };

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        console.log("A date has been picked: ", date);
        const formattedDate = new Date(date);
        const day = formattedDate.getDate();
        const month = formattedDate.toLocaleString('default', { month: 'long' });
        const year = formattedDate.getFullYear();
        const dateString = `${month} ${day}, ${year}`;
        const user_age = calculateAge(date);
        console.log("Current Age: ", user_age);
        if (user_age < 16) {
            alert("You must be at least 16 years old to use this app.");
        }
        else if (user_age > 30) {
            alert("You must be at most 30 years old to use this app.");
        }
        else {
            updateDob(dateString);
            updateAge(user_age);
        }
        hideDatePicker();
    };

    const calculateAge = (dob) => {
        const dobDate = new Date(dob);
        const currentDate = new Date();

        let age = currentDate.getFullYear() - dobDate.getFullYear();

        // Check if the birthday has occurred this year
        if (
            currentDate.getMonth() < dobDate.getMonth() ||
            (currentDate.getMonth() === dobDate.getMonth() && currentDate.getDate() < dobDate.getDate())
        ) {
            age--;
        }

        return age;
    };

    const handleImagePickerPress = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1,
        });
        if (!result.canceled) {
            // setImage(result.assets[0].uri);
            updateImage(result.assets[0].uri)
            // processFaces(result.assets[0].uri)
        }
    }

    const labels = {
        left: {
            title: "left",
            value: "left"
        },
        right: {
            title: "right",
            value: "right"
        },
        center: {
            title: "center",
            value: "center"
        }
    };

    // Face detection
    async function processFaces(imagePath) {
        // const options = {
        //   landmarkMode: FaceDetectorLandmarkMode.ALL,
        //   contourMode: FaceDetectorContourMode.ALL
        // };

        const faces = await FaceDetection.processImage(imagePath);

        faces.forEach(face => {
            setFace(true)
        });
    }

    // Disable Back Button
    // useEffect(() => {
    //     const backHandler = BackHandler.addEventListener(
    //         'hardwareBackPress',
    //         () => {
    //             return true;
    //         }
    //     );
    //     // Clean up the event listener when the component is unmounted
    //     return () => backHandler.remove();
    // }, []);

    return (
        
        <View style={{ flex: 1, backgroundColor: '#fff', }}>
            <StatusBar style="dark" />
            <ScrollView contentContainerStyle={{ width: '100%', alignItems: 'center', justifyContent: 'center', padding: 20, paddingTop: 60 }}>
                <Image source={require('../../assets/icons/login page/twohearts.jpg')} style={{ width: 100, height: 100, position: 'absolute', top: 0, left: 0 }} />
                <Text style={{ fontSize: 16, fontFamily: 'Poppins_600SemiBold', color: '#000' }}>You are verified now!</Text>
                <Text style={{ fontSize: 28, fontFamily: 'Poppins_700Bold', color: '#E23DA0' }}>Build Your Profile</Text>
                <TouchableOpacity onPress={handleImagePickerPress} style={{
                    width: 150, height: 150, borderRadius: 100, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center', marginTop: 20, shadowColor: "#000000", shadowOffset: { width: 0, height: 3, }, shadowOpacity: 0.18, shadowRadius: 4.59, elevation: 5
                }}>
                    {image ? (
                        <Image source={{ uri: image }} style={{ width: 150, height: 150, borderRadius: 100 }} />
                    ) : (
                        <Image source={require('../../assets/icons/user.png')} style={{ width: 110, height: 110, tintColor: '#000' }} />
                    )}
                    <Image source={require('../../assets/icons/add.png')} style={{ width: 30, height: 30, position: 'absolute', bottom: -18, borderRadius: 100, backgroundColor: '#E23DA0', tintColor: '#452936' }} />
                </TouchableOpacity>
                {image && (
                    <Image source={require('../../assets/icons/login page/h1.jpg')} style={{ width: 40, height: 40, position: 'absolute', top: 280, right: 20, transform: [{ rotate: '20deg' }] }} />
                )}
                <Text style={{ fontSize: 10, fontFamily: 'Poppins_400Regular', color: '#000', marginTop: 32 }}>This image must contain a face</Text>

                <Text style={{ width: '90%', textAlign: 'left', fontFamily: 'Poppins_600SemiBold', color: '#E23DA0', marginTop: 25, fontSize: 13, textDecorationLine: 'underline' }}>Your Name</Text>
                <TextInput
                    style={{ height: 40, borderColor: '#FFC75F', borderWidth: 1, marginHorizontal: 20, paddingHorizontal: 10, borderRadius: 10, marginTop: 5, width: '90%', backgroundColor: '#fff', fontFamily: 'Poppins_600SemiBold', color: '#000' }}
                    value={name}
                    onSubmitEditing={() => {
                        // setText(text);
                        // updateName(text)
                    }}
                    placeholder=""
                    placeholderTextColor="gray"

                    maxLength={50}
                    onChangeText={(text) => {
                        updateName(text)
                    }} />
                <View style={{ marginTop: 5, width: '90%', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end' }}>
                    <Text style={{ fontFamily: 'Poppins_600SemiBold', color: '#000', fontSize: 12, }}>Show on Profile</Text>
                    <Switch
                        style={{ alignSelf: 'flex-end', transform: [{ scaleX: .8 }, { scaleY: .8 }], marginLeft: 4 }}
                        trackColor={{ false: "#ECECEC", true: "#DCADAD" }}
                        thumbColor={"#E23DA0"}
                        ios_backgroundColor="#d1d1d1"
                        onValueChange={() => updateShowNameOnProfile(!showNameOnProfile)}
                        value={showNameOnProfile}

                    />
                </View>

                <Text style={{ width: '90%', textAlign: 'left', fontFamily: 'Poppins_600SemiBold', color: '#E23DA0', marginTop: 10, fontSize: 13, textDecorationLine: 'underline' }}>Bio</Text>



                <TextInput
                    style={{ height: 60, borderColor: '#FFC75F', borderWidth: 1, marginHorizontal: 20, paddingHorizontal: 10, borderRadius: 10, marginTop: 5, width: '90%', backgroundColor: '#fff', fontFamily: 'Poppins_500Medium', color: '#000', paddingTop: 5 }}
                    value={bio}
                    multiline={true}
                    numberOfLines={4}
                    textAlignVertical='top'
                    onSubmitEditing={() => {
                        // setText(text);
                        updateBio(text)
                    }}
                    placeholder="Write about yourself"
                    placeholderTextColor="gray"
                    
                    maxLength={300}
                    onChangeText={(text) => {
                        updateBio(text)
                    }} />
                

                <Text style={{ width: '90%', textAlign: 'left', fontFamily: 'Poppins_600SemiBold', color: '#E23DA0', marginTop: 10, fontSize: 13, textDecorationLine: 'underline' }}>Sex</Text>

                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 10, width: '90%', }}>
                    <TouchableOpacity onPress={() => { updateGender('male') }}
                        style={{
                            backgroundColor: gender === 'male' ? '#E23DA0' : '#fff', borderRadius: 8, alignItems: 'center', justifyContent: 'center', paddingVertical: 10, marginHorizontal: 10, shadowColor: "#000000",
                            shadowOffset: {
                                width: 0,
                                height: 3,
                            },
                            shadowOpacity: 0.17,
                            shadowRadius: 3.05,
                            elevation: 4, zIndex: 1, width: 100
                        }}>
                        <Text style={{ fontFamily: 'Poppins_600SemiBold', color: gender === 'male' ? '#fff' : '#000', padding: 20 }}>Male</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { updateGender('female') }}
                        style={{
                            backgroundColor: gender === 'female' ? '#E23DA0' : '#fff', borderRadius: 8, alignItems: 'center', justifyContent: 'center', paddingVertical: 10, marginHorizontal: 10, shadowColor: "#000000",
                            shadowOffset: {
                                width: 0,
                                height: 3,
                            },
                            shadowOpacity: 0.17,
                            shadowRadius: 3.05,
                            elevation: 4, zIndex: 1, width: 100
                        }}>
                        <Text style={{ fontFamily: 'Poppins_600SemiBold', color: gender === 'female' ? '#fff' : '#000', padding: 20 }}>Female</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { updateGender('other') }}
                        style={{
                            backgroundColor: gender === 'other' ? '#E23DA0' : '#fff', borderRadius: 8, alignItems: 'center', justifyContent: 'center', paddingVertical: 10, marginHorizontal: 10, shadowColor: "#000000",
                            shadowOffset: {
                                width: 0,
                                height: 3,
                            },
                            shadowOpacity: 0.17,
                            shadowRadius: 3.05,
                            elevation: 4, zIndex: 1, width: 100
                        }}>
                        <Text style={{ fontFamily: 'Poppins_600SemiBold', color: gender === 'other' ? '#fff' : '#000', padding: 20 }}>Other</Text>
                    </TouchableOpacity>
                </View>

                <Text style={{ width: '90%', textAlign: 'left', fontFamily: 'Poppins_600SemiBold', color: '#E23DA0', marginTop: 30, fontSize: 13, textDecorationLine: 'underline' }}>DoB</Text>
                <TouchableOpacity onPress={showDatePicker} style={{ width: '90%' }}>
                    <Text style={{ color: dob ? "white" : '#E23DA0', backgroundColor: dob ? "#FFC75F" : '#fff', padding: 8, borderRadius: 10, textAlign: "center", fontSize: 14, fontFamily: 'Poppins_500Medium', overflow: 'hidden', marginTop: 10, borderWidth: 1, borderColor: '#FFC75F' }}>{dob ? "" + dob + "" : "Select Date "}</Text>
                </TouchableOpacity>
                <DateTimePickerModal
                    isVisible={isDatePickerVisible}
                    mode="date"
                    onConfirm={handleConfirm}
                    onCancel={hideDatePicker}
                    // display='inline'
                    isDarkModeEnabled={true}
                // textColor='#B0B0B0'
                />




                <TouchableOpacity activeOpacity={0.4} disabled={(image && name.length > 1 && dob) ? false : true} onPress={() => navigation.navigate('Images')} style={{}}>
                    <Text style={{ color: "white", backgroundColor: "#E23DA0", padding: 8, borderRadius: 10, textAlign: "center", fontSize: 14, fontFamily: 'Poppins_500Medium', marginTop: 30, marginHorizontal: 20, overflow: 'hidden', paddingHorizontal: 110, opacity: (image && name.length > 1 && dob) ? 1 : 0.4 }}>Continue</Text>
                </TouchableOpacity>

                        {Platform.OS === 'ios' && (

                            <View style={{height:90}}></View>
                        )}

            </ScrollView>

        </View>

    )
}

export default NameScreen