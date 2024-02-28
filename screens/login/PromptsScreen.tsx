import { View, Text, Platform, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import { useRecoilState } from 'recoil';
import { userState } from '../../utils/Store';
import { ChevronRightIcon } from "react-native-heroicons/outline";
import Prompt1 from '../../components/Login/Prompt1';
import { PlusIcon } from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native';


const PromptsScreen = () => {
  const [user, setUser] = useRecoilState(userState);
  const [prompts, setPrompts] = useState('prompt1')
  const { prompt1, prompt2, prompt3 } = user;
  const [isModalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const openPromptModal = (selectedPrompt: 'prompt1' | 'prompt2' | 'prompt3') => {
    // Set the selected prompt in the state or do any other logic you need
    setPrompts(selectedPrompt);
    toggleModal(); // Toggle the modal visibility
  };

  return (
    <View style={{ flex: 1, padding: 20, paddingTop: 60 }}>
      <Text style={{ fontSize: 32, fontFamily: 'Poppins_700Bold', color: '#E23DA0' }}>Your Prompts</Text>
      <Text style={{ fontSize: 11, fontFamily: 'Poppins_600SemiBold', color: '#000' }}>Prompts are questions that are displayed on a user's profile. They are designed to help other users get to know the person behind the profile, and to start conversations.</Text>

      <TouchableOpacity  onPress={() => openPromptModal('prompt1')} activeOpacity={0.4} style={{ marginTop: 30, padding: 25, paddingTop: 20, paddingHorizontal: 15, borderRadius: 10, backgroundColor: '#dcadca', borderColor: '#E23DA0',elevation: 3, shadowColor: "#000000", shadowOffset: { width: 0, height: 2, }, shadowOpacity:  0.17, shadowRadius: 2.54, }}>
        <Text style={{ fontFamily: 'Poppins_700Bold', color: '#000', fontSize: 20, }} numberOfLines={1}>{prompt1.question ? prompt1.question : 'Add Prompt 1'}</Text>
        <Text style={{ fontFamily: 'Poppins_600SemiBold', color: '#fff', fontSize: 12, }} numberOfLines={1}>{prompt1.answer ? prompt1.answer : 'Tap here to answer!'}</Text>
        <PlusIcon color="#fff" size={25} style={{ alignSelf: 'flex-end' }} />
      </TouchableOpacity>

      <TouchableOpacity  onPress={() => openPromptModal('prompt2')} activeOpacity={0.4} style={{ marginTop: 20, padding: 25, paddingTop: 20, paddingHorizontal: 15, borderRadius: 10, backgroundColor: '#dcadca', borderColor: '#E23DA0',elevation: 3, shadowColor: "#000000", shadowOffset: { width: 0, height: 2, }, shadowOpacity:  0.17, shadowRadius: 2.54, }}>
        <Text style={{ fontFamily: 'Poppins_700Bold', color: '#000', fontSize: 20, }} numberOfLines={1}>{prompt2.question ? prompt2.question : 'Add Prompt 2'}</Text>
        <Text style={{ fontFamily: 'Poppins_600SemiBold', color: '#fff', fontSize: 12, }} numberOfLines={1}>{prompt2.answer ? prompt2.answer : 'Tap here to answer!'}</Text>
        <PlusIcon color="#fff" size={25} style={{ alignSelf: 'flex-end' }} />
      </TouchableOpacity>

      <TouchableOpacity  onPress={() => openPromptModal('prompt3')} activeOpacity={0.4} style={{ marginTop: 20, padding: 25, paddingTop: 20, paddingHorizontal: 15, borderRadius: 10, backgroundColor: '#dcadca', borderColor: '#E23DA0', elevation: 3, shadowColor: "#000000", shadowOffset: { width: 0, height: 2, }, shadowOpacity:  0.17, shadowRadius: 2.54, }}>
        <Text style={{ fontFamily: 'Poppins_700Bold', color: '#000', fontSize: 20, }} numberOfLines={1}>{prompt3.question ? prompt3.question : 'Add Prompt 3'}</Text>
        <Text style={{ fontFamily: 'Poppins_600SemiBold', color: '#fff', fontSize: 12, }} numberOfLines={1}>{prompt3.answer ? prompt3.answer : 'Tap here to answer!'}</Text>
        <PlusIcon color="#fff" size={25} style={{ alignSelf: 'flex-end' }} />
      </TouchableOpacity>


      <TouchableOpacity activeOpacity={0.4} style={{position: 'absolute', bottom: 30, alignSelf: 'center', width: '90%'}} onPress={()=> {navigation.navigate('Outlook')}}>
        <Text style={{paddingHorizontal: 20, paddingVertical: 10, fontSize: 12, fontFamily: 'Poppins_800ExtraBold', color: '#000', backgroundColor: '#8FCDBB', borderRadius: Platform.OS == 'android'? 30:20, textAlign: 'center', overflow: 'hidden'}}>Last Step ⏭️</Text>
      </TouchableOpacity>

      <Prompt1 isVisible={isModalVisible} closeModal={toggleModal} selectedPrompt={prompts}/>
    </View>
  )
}

export default PromptsScreen