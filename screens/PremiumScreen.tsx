import { View, Text, TouchableOpacity, FlatList, Image, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { PencilSquareIcon } from "react-native-heroicons/outline";
// import Loader from '../Loader';
// import { useFonts } from 'expo-font';
// import { Fonts } from '../fonts';
import { LinearGradient } from 'expo-linear-gradient';
import FeatureCards from '../components/profile/FeatureCards';
import FeatureTable from '../components/profile/FeatureTable';
import PurchaseCards from '../components/Premium/PurchaseCards';

const data = [
  {
    'prevCost': '252.00',
    'cost': '199.00',
    'duration': '1 Week',
    'save': '22%'
  },
  {
    'prevCost': '201.00',
    'cost': '154.00',
    'duration': '1 Month',
    'save': '24%'
  },
  {
    'prevCost': '250.00',
    'cost': '199.00',
    'duration': '1 Week',
    'save': '48%'
  },
]


const ProfileScreen = () => {


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
    <SafeAreaView style={{ flex: 1, backgroundColor: '#DCADAD', }}>
      {/* Header */}
      <View style={{ marginVertical: 10, flexDirection: 'row', alignItems: 'center', width: '100%', justifyContent: 'center' }}>
        <Text
          style={{ fontFamily: 'Italiana', color: '#000', fontSize: 30 }}>
          Aroma
        </Text>
      </View>

      <ScrollView style={{ flex: 1, marginHorizontal: 20 }} showsVerticalScrollIndicator={false}>
        <Text style={{ fontFamily: 'Poppins_900Black', fontSize: 35, color: 'white', marginBottom: 10 }}>Become Our Sponsor</Text>

        <FlatList
          data={data} 
          keyExtractor={(item, index) => index.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({item, index}) => (
            <PurchaseCards 
            prevCost={item.prevCost}
            cost={item.cost}
            duration={item.duration}
            save={item.save}
            />
          )}
        />

        <View style={{ marginTop: 30, width: '95%', alignSelf: 'center' }}>
          <FeatureCards />
        </View>

        <View style={{backgroundColor: 'white', borderRadius: 20, marginTop: 20, paddingHorizontal: 20}}>
          <FeatureTable />
        </View>

        {/* Dummy Space for full viewing */}
        <View style={{ height: 100 , width: '100%'}}></View>

      </ScrollView>
    </SafeAreaView>
  )
}

export default ProfileScreen