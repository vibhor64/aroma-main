import { View, Text, TouchableOpacity, Image, BackHandler, Platform, ScrollView, TextInput, Switch } from 'react-native'
import React, { useEffect, useState } from 'react'
import * as ImagePicker from 'expo-image-picker';
import { useRecoilState } from 'recoil';
import { userState } from '../utils/Store';
import { useNavigation } from '@react-navigation/native';
import { ChevronDoubleRightIcon, PlusIcon } from 'react-native-heroicons/outline';
import Prompt1 from '../components/Login/Prompt1';

const EditProfile = () => {
    const navigation = useNavigation();
    const [user, setUser] = useRecoilState(userState);
    const [prompts, setPrompts] = useState('prompt1')
    const { image, img2, img3, img4, img5, img6, bio, showNameOnProfile, prompt1, prompt2, prompt3 } = user;

    const updateImage = (newName: any) => {
        setUser((prevUser: any) => ({ ...prevUser, image: newName }));
    };
    const updateImg2 = (newName: any) => {
        setUser((prevUser: any) => ({ ...prevUser, img2: newName }));
    };
    const updateImg3 = (newName: any) => {
        setUser((prevUser: any) => ({ ...prevUser, img3: newName }));
    };
    const updateImg4 = (newName: any) => {
        setUser((prevUser: any) => ({ ...prevUser, img4: newName }));
    };
    const updateImg5 = (newName: any) => {
        setUser((prevUser: any) => ({ ...prevUser, img5: newName }));
    };
    const updateImg6 = (newName: any) => {
        setUser((prevUser: any) => ({ ...prevUser, img6: newName }));
    };
    const updateBio = (newName: any) => {
        setUser((prevUser) => ({ ...prevUser, bio: newName }));
    };
    const updateShowNameOnProfile = (newName: any) => {
        setUser((prevUser) => ({ ...prevUser, showNameOnProfile: newName }));
    };

    const handleImagePickerPress = async ({ updateImageFn }) => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1,
        });
        if (!result.canceled) {
            updateImageFn(result.assets[0].uri)
            // processFaces(result.assets[0].uri)
        }
    }

    const openPromptModal = (selectedPrompt: 'prompt1' | 'prompt2' | 'prompt3') => {
        // Set the selected prompt in the state or do any other logic you need
        setPrompts(selectedPrompt);
        toggleModal(); // Toggle the modal visibility
      };

    const [isModalVisible, setModalVisible] = useState(false);
    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };


    return (
        <ScrollView style={{ flex: 1, backgroundColor: '#fff', }}>
            <View style={{ flex: 1, padding: 20, paddingTop: 60, backgroundColor: '#fff', height: '100%', minHeight: '100%' }}>
                <Text style={{ fontSize: 32, fontFamily: 'Poppins_700Bold', color: '#E23DA0', paddingLeft: 10, textAlign: 'center' }}>Edit Profile</Text>
                {/* <Text style={{ fontSize: 12, fontFamily: 'Poppins_600SemiBold', color: '#000' }}>Images</Text> */}

                <Image source={require('../assets/icons/login page/h4.jpg')} style={{ width: 70, height: 70, position: 'absolute', right: 0, top: 50, zIndex: -1 }} />

                <Text style={{ width: '100%', textAlign: 'center', fontFamily: 'Poppins_600SemiBold', color: '#000', marginTop: 10, fontSize: 12, marginLeft: 0}}>Change images</Text>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', flexWrap: 'wrap', marginTop: 0 }}>
                    <TouchableOpacity onPress={() => handleImagePickerPress({ updateImageFn: updateImg2 })}
                        style={{
                            width: 100, height: 100, borderRadius: 100, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center', marginTop: 20, shadowColor: "#000000", shadowOffset: { width: 0, height: 3, }, shadowOpacity: 0.18, shadowRadius: 4.59, elevation: 5
                        }}>
                        {image ? (
                            <Image source={{ uri: image }} style={{ width: 100, height: 100, borderRadius: 100 }} />
                        ) : (
                            <Image source={require('../assets/icons/user.png')} style={{ width: 70, height: 70, tintColor: '#000' }} />
                        )}
                        {/* <Image source={{ uri: image }} style={{ width: 100, height: 100, borderRadius: 100 }} /> */}
                        <Image source={require('../assets/icons/crown.png')} style={{ width: 25, height: 25, position: 'absolute', bottom: -12, borderRadius: 100, }} />
                    </TouchableOpacity>


                    <TouchableOpacity onPress={() => handleImagePickerPress({ updateImageFn: updateImg2 })} style={{
                        width: 100, height: 100, borderRadius: 100, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center', marginTop: 20, shadowColor: "#000000", shadowOffset: { width: 0, height: 3, }, shadowOpacity: 0.18, shadowRadius: 4.59, elevation: 5
                    }}>
                        {img2 ? (
                            <Image source={{ uri: img2 }} style={{ width: 100, height: 100, borderRadius: 100 }} />
                        ) : (
                            <Image source={require('../assets/icons/user.png')} style={{ width: 70, height: 70, tintColor: '#000' }} />
                        )}
                        <Image source={require('../assets/icons/add.png')} style={{ width: 25, height: 25, position: 'absolute', bottom: -15, borderRadius: 100, backgroundColor: '#E23DA0', tintColor: '#452936' }} />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => handleImagePickerPress({ updateImageFn: updateImg3 })} style={{
                        width: 100, height: 100, borderRadius: 100, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center', marginTop: 20, shadowColor: "#000000", shadowOffset: { width: 0, height: 3, }, shadowOpacity: 0.18, shadowRadius: 4.59, elevation: 5
                    }}>
                        {img3 ? (
                            <Image source={{ uri: img3 }} style={{ width: 100, height: 100, borderRadius: 100 }} />
                        ) : (
                            <Image source={require('../assets/icons/user.png')} style={{ width: 70, height: 70, tintColor: '#000' }} />
                        )}
                        <Image source={require('../assets/icons/add.png')} style={{ width: 25, height: 25, position: 'absolute', bottom: -15, borderRadius: 100, backgroundColor: '#E23DA0', tintColor: '#452936' }} />
                    </TouchableOpacity>


                    <TouchableOpacity onPress={() => handleImagePickerPress({ updateImageFn: updateImg4 })} style={{
                        width: 100, height: 100, borderRadius: 100, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center', marginTop: 40, shadowColor: "#000000", shadowOffset: { width: 0, height: 3, }, shadowOpacity: 0.18, shadowRadius: 4.59, elevation: 5,
                    }}>
                        {img4 ? (
                            <Image source={{ uri: img4 }} style={{ width: 100, height: 100, borderRadius: 100 }} />
                        ) : (
                            <Image source={require('../assets/icons/user.png')} style={{ width: 70, height: 70, tintColor: '#000' }} />
                        )}
                        <Image source={require('../assets/icons/add.png')} style={{ width: 25, height: 25, position: 'absolute', bottom: -15, borderRadius: 100, backgroundColor: '#E23DA0', tintColor: '#452936' }} />
                    </TouchableOpacity>


                    <TouchableOpacity onPress={() => handleImagePickerPress({ updateImageFn: updateImg5 })} style={{
                        width: 100, height: 100, borderRadius: 100, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center', marginTop: 40, shadowColor: "#000000", shadowOffset: { width: 0, height: 3, }, shadowOpacity: 0.18, shadowRadius: 4.59, elevation: 5
                    }}>
                        {img5 ? (
                            <Image source={{ uri: img5 }} style={{ width: 100, height: 100, borderRadius: 100 }} />
                        ) : (
                            <Image source={require('../assets/icons/user.png')} style={{ width: 70, height: 70, tintColor: '#000' }} />
                        )}
                        <Image source={require('../assets/icons/add.png')} style={{ width: 25, height: 25, position: 'absolute', bottom: -15, borderRadius: 100, backgroundColor: '#E23DA0', tintColor: '#452936' }} />
                    </TouchableOpacity>


                    <TouchableOpacity onPress={() => handleImagePickerPress({ updateImageFn: updateImg6 })} style={{
                        width: 100, height: 100, borderRadius: 100, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center', marginTop: 40, shadowColor: "#000000", shadowOffset: { width: 0, height: 3, }, shadowOpacity: 0.18, shadowRadius: 4.59, elevation: 5
                    }}>
                        {img6 ? (
                            <Image source={{ uri: img6 }} style={{ width: 100, height: 100, borderRadius: 100 }} />
                        ) : (
                            <Image source={require('../assets/icons/user.png')} style={{ width: 70, height: 70, tintColor: '#000' }} />
                        )}
                        <Image source={require('../assets/icons/add.png')} style={{ width: 25, height: 25, position: 'absolute', bottom: -15, borderRadius: 100, backgroundColor: '#E23DA0', tintColor: '#452936' }} />
                    </TouchableOpacity>



                </View>


                <View style={{ marginHorizontal: 10, backgroundColor: '#dadada', marginVertical: 40, width: '100%', alignSelf: 'center', borderRadius: 15, paddingHorizontal: 10, paddingBottom: 20 }}>

                    <Text style={{ width: '100%', textAlign: 'center', fontFamily: 'Poppins_600SemiBold', color: '#E23DA0', marginTop: 30, fontSize: 14, }}>Bio</Text>

                    <TextInput
                        style={{ height: 70, borderColor: '#FFC75F', borderWidth: 1.5, paddingHorizontal: 10, borderRadius: 10, marginTop: 5, width: '100%', backgroundColor: '#fff', fontFamily: 'Poppins_500Medium', color: '#000', paddingTop: 5 }}
                        value={bio}
                        multiline={true}
                        numberOfLines={4}
                        textAlignVertical='top'
                        // onSubmitEditing={(text) => {
                        //     // setText(text);
                        //     updateBio(text)
                        // }}
                        placeholder="Write about yourself"
                        placeholderTextColor="gray"
                        placeholderStyle={{ fontFamily: 'Poppins_500Medium' }}
                        maxLength={300}
                        onChangeText={(text) => {
                            updateBio(text)
                        }} />

                    <View style={{ marginTop: 5, width: '90%', flexDirection: 'row', alignItems: 'center', }}>
                        <Text style={{ fontFamily: 'Poppins_600SemiBold', color: '#000', fontSize: 12, }}>Show name on profile</Text>
                        <Switch
                            style={{ transform: [{ scaleX: .8 }, { scaleY: .8 }], marginLeft: 0 }}
                            trackColor={{ false: "#ECECEC", true: "#DCADAD" }}
                            thumbColor={"#E23DA0"}
                            ios_backgroundColor="#d1d1d1"
                            onValueChange={() => updateShowNameOnProfile(!showNameOnProfile)}
                            value={showNameOnProfile}

                        />
                    </View>

                    <Text style={{ width: '100%', textAlign: 'center', fontFamily: 'Poppins_600SemiBold', color: '#E23DA0', marginTop: 30, fontSize: 14,}}>Edit Prompts</Text>

                    <TouchableOpacity onPress={() => openPromptModal('prompt1')} activeOpacity={0.4} style={{ marginTop: 5, padding: 25, paddingTop: 20, paddingHorizontal: 15, borderRadius: 10, backgroundColor: '#dcadca', borderColor: '#E23DA0', elevation: 3, shadowColor: "#000000", shadowOffset: { width: 0, height: 2, }, shadowOpacity: 0.17, shadowRadius: 2.54, }}>
                        <Text style={{ fontFamily: 'Poppins_700Bold', color: '#000', fontSize: 20, }} numberOfLines={1}>{prompt1.question ? prompt1.question : 'Add Prompt 1'}</Text>
                        <Text style={{ fontFamily: 'Poppins_600SemiBold', color: '#fff', fontSize: 12, }} numberOfLines={1}>{prompt1.answer ? prompt1.answer : 'Tap here to answer!'}</Text>
                        <PlusIcon color="#fff" size={25} style={{ alignSelf: 'flex-end' }} />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => openPromptModal('prompt2')} activeOpacity={0.4} style={{ marginTop: 20, padding: 25, paddingTop: 20, paddingHorizontal: 15, borderRadius: 10, backgroundColor: '#dcadca', borderColor: '#E23DA0', elevation: 3, shadowColor: "#000000", shadowOffset: { width: 0, height: 2, }, shadowOpacity: 0.17, shadowRadius: 2.54, }}>
                        <Text style={{ fontFamily: 'Poppins_700Bold', color: '#000', fontSize: 20, }} numberOfLines={1}>{prompt2.question ? prompt2.question : 'Add Prompt 2'}</Text>
                        <Text style={{ fontFamily: 'Poppins_600SemiBold', color: '#fff', fontSize: 12, }} numberOfLines={1}>{prompt2.answer ? prompt2.answer : 'Tap here to answer!'}</Text>
                        <PlusIcon color="#fff" size={25} style={{ alignSelf: 'flex-end' }} />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => openPromptModal('prompt3')} activeOpacity={0.4} style={{ marginTop: 20, padding: 25, paddingTop: 20, paddingHorizontal: 15, borderRadius: 10, backgroundColor: '#dcadca', borderColor: '#E23DA0', elevation: 3, shadowColor: "#000000", shadowOffset: { width: 0, height: 2, }, shadowOpacity: 0.17, shadowRadius: 2.54, }}>
                        <Text style={{ fontFamily: 'Poppins_700Bold', color: '#000', fontSize: 20, }} numberOfLines={1}>{prompt3.question ? prompt3.question : 'Add Prompt 3'}</Text>
                        <Text style={{ fontFamily: 'Poppins_600SemiBold', color: '#fff', fontSize: 12, }} numberOfLines={1}>{prompt3.answer ? prompt3.answer : 'Tap here to answer!'}</Text>
                        <PlusIcon color="#fff" size={25} style={{ alignSelf: 'flex-end' }} />
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={0.4} style={{paddingVertical: 10, paddingHorizontal: 20, backgroundColor: '#FFC75F', borderRadius: 10, overflow: 'hidden', marginTop: 20, flexDirection: 'row', elevation: 3, shadowColor: "#000000", shadowOffset: { width: 0, height: 2, }, shadowOpacity: 0.17, shadowRadius: 2.54,}}>
                        <Text style={{fontFamily: 'Poppins_600SemiBold', color: '#fff', fontSize: 12, }}>Edit Preferences</Text>
                        <ChevronDoubleRightIcon size={20} color={'#fff'} style={{marginLeft: 'auto'}}/>
                    </TouchableOpacity>

                    
                    <TouchableOpacity activeOpacity={0.4} style={{paddingVertical: 10, paddingHorizontal: 20, backgroundColor: '#0089BA', borderRadius: 10, overflow: 'hidden', marginTop: 20, flexDirection: 'row', elevation: 3, shadowColor: "#000000", shadowOffset: { width: 0, height: 2, }, shadowOpacity: 0.17, shadowRadius: 2.54,}}>
                        <Text style={{fontFamily: 'Poppins_600SemiBold', color: '#fff', fontSize: 12, }}>Edit Interests</Text>
                        <ChevronDoubleRightIcon size={20} color={'#fff'} style={{marginLeft: 'auto'}}/>
                    </TouchableOpacity>



                </View>

                <TouchableOpacity activeOpacity={0.4} style={{ alignSelf: 'center', width: '90%' }} onPress={() => { navigation.goBack() }}>
                    <Text style={{ paddingHorizontal: 20, paddingVertical: 10, fontSize: 12, fontFamily: 'Poppins_800ExtraBold', color: '#000', backgroundColor: '#8FCDBB', borderRadius: Platform.OS == 'android' ? 30 : 20, textAlign: 'center', overflow: 'hidden' }}>All set 😎</Text>
                </TouchableOpacity>
            </View>

            <Prompt1 isVisible={isModalVisible} closeModal={toggleModal} selectedPrompt={prompts} />
        </ScrollView>
    )
}

export default EditProfile