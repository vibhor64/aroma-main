import { View, Text, TouchableOpacity, Image, BackHandler, Platform } from 'react-native'
import React, { useEffect, useState } from 'react'
import * as ImagePicker from 'expo-image-picker';
import { useRecoilState } from 'recoil';
import { userState } from '../../utils/Store';
import { useNavigation } from '@react-navigation/native';

const ImagesScreen = () => {
  const navigation = useNavigation();
  const [user, setUser] = useRecoilState(userState);
  const { image, img2, img3, img4, img5, img6, } = user;

  const updateImage = (newName: any) => {
    setUser((prevUser) => ({ ...prevUser, image: newName }));
  };
  const updateImg2 = (newName: any) => {
    setUser((prevUser) => ({ ...prevUser, img2: newName }));
  };
  const updateImg3 = (newName: any) => {
    setUser((prevUser) => ({ ...prevUser, img3: newName }));
  };
  const updateImg4 = (newName: any) => {
    setUser((prevUser) => ({ ...prevUser, img4: newName }));
  };
  const updateImg5 = (newName: any) => {
    setUser((prevUser) => ({ ...prevUser, img5: newName }));
  };
  const updateImg6 = (newName: any) => {
    setUser((prevUser) => ({ ...prevUser, img6: newName }));
  };

  const handleImagePickerPress = async ({updateImageFn}) => {
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


  return (
    <View style={{ flex: 1, padding: 20, paddingTop: 60, backgroundColor: '#fff' }}>
      <Text style={{ fontSize: 32, fontFamily: 'Poppins_700Bold', color: '#E23DA0' }}>Add Images</Text>
      <Text style={{ fontSize: 12, fontFamily: 'Poppins_600SemiBold', color: '#000' }}>Images make upto 80% of someone's attention. This is your chance to rizz them up!</Text>

      <Image source={require('../../assets/icons/login page/h4.jpg')} style={{width: 70, height: 70, position: 'absolute', right: 0, top: 50, zIndex: -1}} />

      <View style={{ flexDirection: 'row', justifyContent: 'space-between', flexWrap: 'wrap', marginTop: 20 }}>
        <TouchableOpacity  style={{
          width: 100, height: 100, borderRadius: 100, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center', marginTop: 20, shadowColor: "#000000", shadowOffset: { width: 0, height: 3, }, shadowOpacity: 0.18, shadowRadius: 4.59, elevation: 5
        }}>
          <Image source={{ uri: image }} style={{ width: 100, height: 100, borderRadius: 100 }} />
          <Image source={require('../../assets/icons/crown.png')} style={{ width: 25, height: 25, position: 'absolute', bottom: -12, borderRadius: 100, }} />
        </TouchableOpacity>


        <TouchableOpacity onPress={() => handleImagePickerPress({ updateImageFn: updateImg2 })} style={{
          width: 100, height: 100, borderRadius: 100, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center', marginTop: 20, shadowColor: "#000000", shadowOffset: { width: 0, height: 3, }, shadowOpacity: 0.18, shadowRadius: 4.59, elevation: 5
        }}>
          {img2 ? (
            <Image source={{ uri: img2 }} style={{ width: 100, height: 100, borderRadius: 100 }} />
          ) : (
            <Image source={require('../../assets/icons/user.png')} style={{ width: 70, height: 70, tintColor: '#000' }} />
          )}
          <Image source={require('../../assets/icons/add.png')} style={{ width: 25, height: 25, position: 'absolute', bottom: -15, borderRadius: 100, backgroundColor: '#E23DA0', tintColor: '#452936' }} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handleImagePickerPress({ updateImageFn: updateImg3 })} style={{
          width: 100, height: 100, borderRadius: 100, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center', marginTop: 20, shadowColor: "#000000", shadowOffset: { width: 0, height: 3, }, shadowOpacity: 0.18, shadowRadius: 4.59, elevation: 5
        }}>
          {img3 ? (
            <Image source={{ uri: img3 }} style={{ width: 100, height: 100, borderRadius: 100 }} />
          ) : (
            <Image source={require('../../assets/icons/user.png')} style={{ width: 70, height: 70, tintColor: '#000' }} />
          )}
          <Image source={require('../../assets/icons/add.png')} style={{ width: 25, height: 25, position: 'absolute', bottom: -15, borderRadius: 100, backgroundColor: '#E23DA0', tintColor: '#452936' }} />
        </TouchableOpacity>


        <TouchableOpacity onPress={() => handleImagePickerPress({ updateImageFn: updateImg4 })} style={{
          width: 100, height: 100, borderRadius: 100, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center', marginTop: 40, shadowColor: "#000000", shadowOffset: { width: 0, height: 3, }, shadowOpacity: 0.18, shadowRadius: 4.59, elevation: 5,
        }}>
          {img4 ? (
            <Image source={{ uri: img4 }} style={{ width: 100, height: 100, borderRadius: 100 }} />
          ) : (
            <Image source={require('../../assets/icons/user.png')} style={{ width: 70, height: 70, tintColor: '#000' }} />
          )}
          <Image source={require('../../assets/icons/add.png')} style={{ width: 25, height: 25, position: 'absolute', bottom: -15, borderRadius: 100, backgroundColor: '#E23DA0', tintColor: '#452936' }} />
        </TouchableOpacity>


        <TouchableOpacity onPress={() => handleImagePickerPress({ updateImageFn: updateImg5 })} style={{
          width: 100, height: 100, borderRadius: 100, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center', marginTop: 40, shadowColor: "#000000", shadowOffset: { width: 0, height: 3, }, shadowOpacity: 0.18, shadowRadius: 4.59, elevation: 5
        }}>
          {img5 ? (
            <Image source={{ uri: img5 }} style={{ width: 100, height: 100, borderRadius: 100 }} />
          ) : (
            <Image source={require('../../assets/icons/user.png')} style={{ width: 70, height: 70, tintColor: '#000' }} />
          )}
          <Image source={require('../../assets/icons/add.png')} style={{ width: 25, height: 25, position: 'absolute', bottom: -15, borderRadius: 100, backgroundColor: '#E23DA0', tintColor: '#452936' }} />
        </TouchableOpacity>


        <TouchableOpacity onPress={() => handleImagePickerPress({ updateImageFn: updateImg6 })} style={{
          width: 100, height: 100, borderRadius: 100, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center', marginTop: 40, shadowColor: "#000000", shadowOffset: { width: 0, height: 3, }, shadowOpacity: 0.18, shadowRadius: 4.59, elevation: 5
        }}>
          {img6 ? (
            <Image source={{ uri: img6 }} style={{ width: 100, height: 100, borderRadius: 100 }} />
          ) : (
            <Image source={require('../../assets/icons/user.png')} style={{ width: 70, height: 70, tintColor: '#000' }} />
          )}
          <Image source={require('../../assets/icons/add.png')} style={{ width: 25, height: 25, position: 'absolute', bottom: -15, borderRadius: 100, backgroundColor: '#E23DA0', tintColor: '#452936' }} />
        </TouchableOpacity>



      </View>

      <TouchableOpacity activeOpacity={0.4} style={{position: 'absolute', bottom: 30, alignSelf: 'center', width: '90%'}} onPress={()=> {navigation.navigate('Traits')}}>
        <Text style={{paddingHorizontal: 20, paddingVertical: 10, fontSize: 12, fontFamily: 'Poppins_800ExtraBold', color: '#000', backgroundColor: '#8FCDBB', borderRadius: Platform.OS == 'android'? 30:20, textAlign: 'center', overflow: 'hidden'}}>All set 😎</Text>
      </TouchableOpacity>

    </View>
  )
}

export default ImagesScreen