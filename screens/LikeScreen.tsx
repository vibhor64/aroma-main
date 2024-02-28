import { PanResponder, View, Animated, Dimensions, StatusBar, Text, TouchableOpacity, ScrollView, Image, FlatList, Platform } from 'react-native';
import React, { useCallback, useEffect, useRef, useState } from "react";
import { users as usersArray } from "../utils/data";
import Card from '../components/home/Card';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';
import { AdjustmentsHorizontalIcon as Filter } from "react-native-heroicons/outline";
// import { Fonts } from '../fonts';
import Loader from '../Loader';

const { width, height } = Dimensions.get("screen");

export default function HomeScreen() {
  // Load fonts
  // let [fontsLoaded] = useFonts({
  //   'Italiana': require('../assets/fonts/Italiana.ttf'),
  // });

  // if (!fontsLoaded) {
  //   return null;
  // }

  const numberOfProposals = 4;
  const numberOfLikes = 3;

  // Proposals
  // On press, push the user's id at the top of discovery stack and navigate to home
  const renderImage = (index) => (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 14 }}>
      <TouchableOpacity activeOpacity={0.4}>
        <Image source={require('../assets/images/proposal.png')} style={{ width: 150, height: 216, marginTop: 15, borderRadius: 10 }} />
      </TouchableOpacity>
    </View>
  );
  // Likes
  const renderLikeImage = (index) => (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 14 }}>
      <TouchableOpacity activeOpacity={0.4}>
        <Image source={require('../assets/images/likeScreen.png')} style={{ width: 150, height: 216, marginTop: 15, borderRadius: 10 }} />
      </TouchableOpacity>
    </View>
  );

  const data = Array.from({ length: numberOfProposals }, (_, index) => ({ key: index.toString() }));
  const Ldata = Array.from({ length: numberOfLikes }, (_, index) => ({ key: index.toString() }));

  // Load fonts
  // const [fontLoaded] = Fonts();
  // if (!fontLoaded) {
  //   return <Loader />;
  // }

  return (
    <SafeAreaView style={{ flex: 1 }}>

      <View style={{ flex: 1, backgroundColor: "#DCADAD", alignItems: "center", }}>
        <StatusBar backgroundColor="#DCADAD" barStyle="dark-content" />

        {/* Header */}
        <View style={{ marginVertical: 10, flexDirection: 'row', alignItems: 'center', width: '100%', justifyContent: 'center' }}>
          <Text
            style={{ fontFamily: 'Italiana', color: '#000', fontSize: 30 }}>
            Aroma
          </Text>
          <TouchableOpacity style={{ position: 'absolute', right: 20, alignItems: 'center', justifyContent: 'center' }}>
            <View style={{ width: 40, height: 40, borderRadius: 50, backgroundColor: '#A47879', position: 'absolute', right: -5 }}></View>
            <Filter size={30} color="#ECECEC" />
          </TouchableOpacity>
        </View>

        {/* Title */}
        <View style={{ width: '100%', alignItems: 'center', justifyContent: 'center', padding: 10 }}>
          <Text style={{ fontFamily: 'Poppins_800ExtraBold', color: '#fff', fontSize: 33 }}>Interested In You</Text>
          <Text style={{ fontFamily: 'Poppins_600SemiBold', color: '#fff', fontSize: 12, textAlign: 'center' }}>Upgrade to Premium to find more matches</Text>
        </View>

        <View style={{ width: width * 0.9, borderRadius: 20, backgroundColor: '#fff', height: height * 0.7, }}>

          {/* Proposal Cards */}
          {numberOfProposals > 0 && (
            <>
              <Text style={{ fontFamily: 'Poppins_600SemiBold', color: '#C08484', fontSize: 12, margin: 20, marginBottom: 0 }}>{numberOfProposals} · Proposals</Text>
              <FlatList
                data={data}
                renderItem={({ item }) => renderImage(Array.from({ length: numberOfProposals }, (_, index) => index))}
                keyExtractor={(item) => item.key}
                horizontal
                showsHorizontalScrollIndicator={false}
              />
            </>
          )}

          {/* Like Cards */}
          {numberOfLikes > 0 && (
            <>
              <Text style={{ fontFamily: 'Poppins_600SemiBold', color: '#C08484', fontSize: 12, marginHorizontal: 20, marginTop: numberOfProposals > 0 ? -10 : 20 }}>{numberOfLikes} · Likes</Text>
              <FlatList
                data={Ldata}
                renderItem={({ item }) => renderLikeImage(Array.from({ length: numberOfLikes }, (_, index) => index))}
                keyExtractor={(item) => item.key}
                horizontal
                showsHorizontalScrollIndicator={false}

              />
            </>
          )}


          {/* No Likes Prompt */}
          {numberOfLikes < 1 && numberOfProposals < 1 && (
            <View>
              <Text style={{color: '#000', fontFamily: 'Poppins_700Bold', fontSize: 18, textAlign: 'center', marginTop: 200}}>No Proposals or Likes... yet!</Text>
            </View>
          )}


            {/* Get More Swipes Button */}
            {(numberOfLikes < 1 || numberOfProposals < 1) && (
          <View style={{ flex: 1, width: '100%', alignItems: 'center', justifyContent: 'center' }}>
            <TouchableOpacity activeOpacity={0.4}>
              <Text style={{ backgroundColor: '#8FCDBB', padding: 20, paddingVertical: 10, color: '#fff', fontFamily: 'Poppins_700Bold', fontSize: 18, marginTop: -26,  borderRadius: Platform.OS === 'ios' ? 20 : 30, overflow: 'hidden' }}>Get More Swipes</Text>
            </TouchableOpacity>
          </View>
          )}

        </View>

        {/* </ScrollView> */}


      </View>
    </SafeAreaView>
  );
}
