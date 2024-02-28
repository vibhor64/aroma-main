import { View, Text, TouchableOpacity, FlatList, Image, ScrollView, Platform } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { PencilSquareIcon } from "react-native-heroicons/outline";
// import Loader from '../Loader';
// import { useFonts } from 'expo-font';
// import { Fonts } from '../fonts';
import { LinearGradient } from 'expo-linear-gradient';
import FeatureCards from '../components/profile/FeatureCards';
import FeatureTable from '../components/profile/FeatureTable';
import ProfileModal from '../components/profile/ProfileModal';



const ProfileScreen = () => {

  const [showProfile, setShowProfile] = useState(false);

  const userData = [
    {
      "id": "1",
      "name": "Don Flamingo",
      "age": 22,
      "image": require('../assets/images/user5.jpg'),
      "completed": "80%"
    },
  ]

  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  // Load fonts
  // const [fontLoaded] = Fonts();
  // let [fontsLoaded] = useFonts({
  //   'Italiana': require('../assets/fonts/Italiana.ttf'),
  // });

  // if (!fontsLoaded) {
  //   return <Loader />;
  // }

  // if (!fontLoaded) {
  //   return <Loader />;
  // }
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff', }}>
      {/* Header */}
      <View style={{ marginVertical: 10, flexDirection: 'row', alignItems: 'center', width: '100%', justifyContent: 'center' }}>
        <Text
          style={{ fontFamily: 'Italiana', color: '#000', fontSize: 30 }}>
          Aroma
        </Text>
        <TouchableOpacity style={{ position: 'absolute', right: 20 }}>
          <Image
            source={require('../assets/icons/settings.png')}
            style={{ width: 30, height: 30 }}
          />
        </TouchableOpacity>
      </View>

      <ScrollView style={{ flex: 1 }}>
        {/* Profile section */}
        <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 20, }}>
          <TouchableOpacity activeOpacity={0.5}
            style={{ position: 'absolute', top: 10, right: 100, zIndex: 10, backgroundColor: 'white', borderRadius: 50, padding: 3, overflow: 'hidden' }} >
            <PencilSquareIcon color="black" size={35} />
          </TouchableOpacity>
          <LinearGradient
            start={{ x: 0.0, y: 0.0 }} end={{ x: 1.0, y: 1.0 }}
            locations={[0, 0.5, 0.6]}
            colors={['#845EC2', '#FF6F91', '#D65DB1']}
            style={{ borderRadius: 100, width: 207, height: 207, alignItems: 'center', justifyContent: 'center' }}>
            <TouchableOpacity activeOpacity={0.7} onPress={toggleModal}>
              <Image
                source={userData[0].image}
                style={{ width: 200, height: 200, borderRadius: 100, marginVertical: 10, }}
              />
            </TouchableOpacity>
          </LinearGradient>
          <Text style={{ fontFamily: 'Poppins_500Medium', fontSize: 14, marginTop: 10 }}>{userData[0].completed} complete</Text>
          <Text style={{ fontFamily: 'Poppins_600SemiBold', fontSize: 20, marginTop: -7 }}>{userData[0].name}, {userData[0].age} </Text>
          <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center' }} activeOpacity={0.4}>
            <Text style={{ fontFamily: 'Poppins_600SemiBold', fontSize: 12, color: 'white', backgroundColor: "#FFC75F", paddingHorizontal: 24, paddingVertical: 5, borderRadius: Platform.OS === 'ios' ? 15 : 30, marginTop: 5, overflow: 'hidden' }}>Edit Profile</Text>
            <View style={{ height: 9, width: 9, borderRadius: 50, backgroundColor: "#E42828", position: 'absolute', top: 5, right: 0 }}></View>
          </TouchableOpacity>
        </View>


        {/* Premium Showcase */}
        <View style={{ margin: 20, backgroundColor: '#D9D9D9', borderRadius: 20, padding: 20, flex: 1 }}>
          <FeatureCards />
          <FeatureTable />
        </View>

        {/* Dummy Space for full viewing */}
        <View style={{ height: 100, width: '100%' }}></View>

      </ScrollView>
      {/* Modal */}
      <ProfileModal isVisible={isModalVisible} closeModal={toggleModal}/>
    </SafeAreaView>
  )
}

export default ProfileScreen