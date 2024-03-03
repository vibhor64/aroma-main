import { View, Text, ScrollView, Image, TouchableOpacity, Platform, Animated } from 'react-native'
import React, { useEffect, useRef } from 'react'
import { useRecoilState } from 'recoil';
import { userState } from '../../utils/Store';
import { useNavigation } from '@react-navigation/native';

const Interests = () => {
  const navigation = useNavigation();
  const [user, setUser] = useRecoilState(userState);
  const [numberOfInterests, setNumberOfInterests] = React.useState(0)
  const { interests } = user;

  const updateInterests = (newInterest: string) => {

    if (interests.includes(newInterest)) {
      setUser((prevUser) => ({ ...prevUser, interests: prevUser.interests.filter((interest) => interest !== newInterest) }));
      setNumberOfInterests(numberOfInterests - 1);
      console.log(interests);
    }

    else if (numberOfInterests < 20) {
      setUser((prevUser) => ({ ...prevUser, interests: [...prevUser.interests, newInterest] }));
      setNumberOfInterests(numberOfInterests + 1);
      console.log(interests);
    } else {
      alert('You can select upto 20 interests');
    }
  };

  const animationValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Animate the button based on interests.length
    Animated.timing(animationValue, {
      toValue: interests.length > 0 ? 1 : 0,
      duration: 200, // Adjust the duration as needed
      useNativeDriver: false, // Set to true if possible, depends on your specific styles
    }).start();
  }, [interests]);

  const interpolatedBottom = animationValue.interpolate({
    inputRange: [0, 1],
    outputRange: [-55, 20], // Adjust the starting and ending position as needed
  });

  const Hobbies = [
    '📸 Photography',
    '💃 Dancing',
    '✍️ Writing',
    '🎹 Music',
    '🎤 Singing',
    '🎮 Gaming',
    '📖 Reading',
    '💪 Gym',
    '♟️ Chess',
    '🍳 Cooking',
    '🧑‍💻 Coding',
    '🎨 Sketching',
    '💄 Makeup',
    '🛍️ Shopping',
    '🎭 Acting',
    '🗿 philosophy',
    '🧳 Travelling',
    '🎥 Binge Watching',
    '🧗‍♀️ Hiking',
    '🕉️ Bhakti',
    '💹 Finance'
  ];

  const Sports = [
    '🏏 Cricket',
    '⚽ Football',
    '🏸 Badminton',
    '🏓 Table Tennis',
    '🏊 Swimming',
    '🏀 Basketball',
    '💪 Gym',
    '🎾 Tennis',
    '🏐 Volleyball',
    '🏒 Hockey',
    '🏃‍♂️ Running',
    '🚵‍♂️ Cycling',
  ];

  const SelfCare = [
    '🧘 Meditation',
    '🚶‍♂️ Walk in nature',
    '📖 Reading',
    '🐶 Pet care',
    '🎨 Creative expression (art, writing, etc.)',
    '💤 Quality sleep',
    '🧹 Cleaning',
    '🎶 Listening to calming music',
    '💆‍♀️ Pampering yourself',
    '🌿 Plant care',
    '😊 Positive affirmations',
    '🌄 Sunrise/Sunset',
    '📝 Journaling',
    '👩‍🍳 Trying new recipes',
    '🍎 Healthy eating',
    '🏋️‍♀️ Exercise or yoga',
    '🤗 Connecting with loved ones',
    '🚿 Shower self-care',
    '🌌 Stargazing',
    '🍓 Eating fruits',
    '🧼 Skincare routine',
    '🔥 Candlelit relaxation',
  ];

  const Social = [
    '🎵 Music festivals',
    '🧍 Stand-up',
    '🍵 Cafe-hopping',
    '🎮 Game nights with friends',
    '🍻 Pub or bar outings',
    '🎸 Live music events',
    '🎳 Bowling nights',
    '🎲 Board game sessions',
    '🎤 Karaoke nights',
    '🚗 Road trips with friends',
    '🏰 Museums and Galleries',
    '🛍️ Shopping sprees with friends',
  ];

  const Food = [
    '🍡 Street Food',
    '🍕 Italian',
    '🥘 Indian',
    '🍜 Chinese',
    '🍦 Ice Cream',
    '☕ Tea Obviously',
    '🍹 Mocktail Mixer',

  ]

  const Movie = [
    '💃 Bollywood',
    '😱 Drama',
    '🧟‍♂️ Horror',
    '😺 Anime',
    '👊 Action',
    '🥸 Documentaries',
    '😂 Comedy',
  ]

  const Music = [
    '🎵 EDM',
    '🎧 Hip Hop',
    '🎸 Rock',
    '🎵 Bollywood',
    '🎵 Romantic',
    '🎵 Pop',
  ]

  return (
    <>
      <Text style={{ fontSize: 10, fontFamily: 'Poppins_700Bold', color: '#fff', borderRadius: Platform.OS == 'android' ? 20 : 10, padding: 5, textAlign: 'center', textAlignVertical: 'center', paddingHorizontal: 10, position: 'absolute', top: 63, right: Platform.OS == 'android' ? 0 : 10, zIndex: 3, backgroundColor: '#FFC75F', overflow: 'hidden', borderTopRightRadius: 0, borderBottomRightRadius: 0 }}>{interests.length}/20 selected</Text>

      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>

        <View style={{ padding: 20, paddingTop: 50, backgroundColor: '#fff', flex: 1 }}>
          <Text style={{ fontSize: 32, fontFamily: 'Poppins_700Bold', color: '#E23DA0' }}>Interests</Text>
          <Text style={{ fontSize: 12, fontFamily: 'Poppins_600SemiBold', color: '#000', marginBottom: 20 }}>Are the main thing that will help others understand your holistic personality.</Text>


          <View>
            <Text style={{ fontSize: 13, fontFamily: 'Poppins_700Bold', color: '#000', marginLeft: 10 }}>Hobbies</Text>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginBottom: 20 }}>
              {Hobbies.map((item, index) => (
                <TouchableOpacity activeOpacity={0.3} key={index} onPress={() => updateInterests(item)} style={{ borderRadius: Platform.OS == 'android' ? 20 : 15, margin: 5, overflow: 'hidden' }}>
                  <Text style={{ fontSize: 9, color: interests.includes(item) ? '#fff' : '#000', fontFamily: "Poppins_600SemiBold", borderWidth: 1, borderColor: "#000", padding: 5, borderRadius: Platform.OS == 'android' ? 20 : 15, textAlign: 'center', textAlignVertical: 'center', backgroundColor: interests.includes(item) ? '#000' : '#fff', paddingRight: 10 }}> {item}</Text>
                </TouchableOpacity>
              ))}
            </View>

            <Text style={{ fontSize: 13, fontFamily: 'Poppins_700Bold', color: '#000', marginLeft: 10 }}>Sports</Text>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginBottom: 20 }}>
              {Sports.map((item, index) => (
                <TouchableOpacity activeOpacity={0.3} key={index} onPress={() => updateInterests(item)} style={{ borderRadius: Platform.OS == 'android' ? 20 : 15, margin: 5, overflow: 'hidden' }}>
                  <Text style={{ fontSize: 9, color: interests.includes(item) ? '#fff' : '#000', fontFamily: "Poppins_600SemiBold", borderWidth: 1, borderColor: "#000", padding: 5, borderRadius: Platform.OS == 'android' ? 20 : 15, textAlign: 'center', textAlignVertical: 'center', backgroundColor: interests.includes(item) ? '#000' : '#fff', paddingRight: 10 }}> {item}</Text>
                </TouchableOpacity>
              ))}
            </View>

            <Text style={{ fontSize: 13, fontFamily: 'Poppins_700Bold', color: '#000', marginLeft: 10 }}>Self Care</Text>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginBottom: 20 }}>
              {SelfCare.map((item, index) => (
                <TouchableOpacity activeOpacity={0.3} key={index} onPress={() => updateInterests(item)} style={{ borderRadius: Platform.OS == 'android' ? 20 : 15, margin: 5, overflow: 'hidden' }}>
                  <Text style={{ fontSize: 9, color: interests.includes(item) ? '#fff' : '#000', fontFamily: "Poppins_600SemiBold", borderWidth: 1, borderColor: "#000", padding: 5, borderRadius: Platform.OS == 'android' ? 20 : 15, textAlign: 'center', textAlignVertical: 'center', backgroundColor: interests.includes(item) ? '#000' : '#fff', paddingRight: 10 }}> {item}</Text>
                </TouchableOpacity>
              ))}
            </View>


            <Text style={{ fontSize: 13, fontFamily: 'Poppins_700Bold', color: '#000', marginLeft: 10 }}>Social Activities</Text>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginBottom: 20 }}>
              {Social.map((item, index) => (
                <TouchableOpacity activeOpacity={0.3} key={index} onPress={() => updateInterests(item)} style={{ borderRadius: Platform.OS == 'android' ? 20 : 15, margin: 5, overflow: 'hidden' }}>
                  <Text style={{ fontSize: 9, color: interests.includes(item) ? '#fff' : '#000', fontFamily: "Poppins_600SemiBold", borderWidth: 1, borderColor: "#000", padding: 5, borderRadius: Platform.OS == 'android' ? 20 : 15, textAlign: 'center', textAlignVertical: 'center', backgroundColor: interests.includes(item) ? '#000' : '#fff', paddingRight: 10 }}> {item}</Text>
                </TouchableOpacity>
              ))}
            </View>

            <Text style={{ fontSize: 13, fontFamily: 'Poppins_700Bold', color: '#000', marginLeft: 10 }}>Food</Text>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginBottom: 20 }}>
              {Food.map((item, index) => (
                <TouchableOpacity activeOpacity={0.3} key={index} onPress={() => updateInterests(item)} style={{ borderRadius: Platform.OS == 'android' ? 20 : 15, margin: 5, overflow: 'hidden' }}>
                  <Text style={{ fontSize: 9, color: interests.includes(item) ? '#fff' : '#000', fontFamily: "Poppins_600SemiBold", borderWidth: 1, borderColor: "#000", padding: 5, borderRadius: Platform.OS == 'android' ? 20 : 15, textAlign: 'center', textAlignVertical: 'center', backgroundColor: interests.includes(item) ? '#000' : '#fff', paddingRight: 10 }}> {item}</Text>
                </TouchableOpacity>
              ))}
            </View>

            <Text style={{ fontSize: 13, fontFamily: 'Poppins_700Bold', color: '#000', marginLeft: 10 }}>Movie</Text>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginBottom: 20 }}>
              {Movie.map((item, index) => (
                <TouchableOpacity activeOpacity={0.3} key={index} onPress={() => updateInterests(item)} style={{ borderRadius: Platform.OS == 'android' ? 20 : 15, margin: 5, overflow: 'hidden' }}>
                  <Text style={{ fontSize: 9, color: interests.includes(item) ? '#fff' : '#000', fontFamily: "Poppins_600SemiBold", borderWidth: 1, borderColor: "#000", padding: 5, borderRadius: Platform.OS == 'android' ? 20 : 15, textAlign: 'center', textAlignVertical: 'center', backgroundColor: interests.includes(item) ? '#000' : '#fff', paddingRight: 10 }}> {item}</Text>
                </TouchableOpacity>
              ))}
            </View>

            <Text style={{ fontSize: 13, fontFamily: 'Poppins_700Bold', color: '#000', marginLeft: 10 }}>Music</Text>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginBottom: 20 }}>
              {Music.map((item, index) => (
                <TouchableOpacity activeOpacity={0.3} key={index} onPress={() => updateInterests(item)} style={{ borderRadius: Platform.OS == 'android' ? 20 : 15, margin: 5, overflow: 'hidden' }}>
                  <Text style={{ fontSize: 9, color: interests.includes(item) ? '#fff' : '#000', fontFamily: "Poppins_600SemiBold", borderWidth: 1, borderColor: "#000", padding: 5, borderRadius: Platform.OS == 'android' ? 20 : 15, textAlign: 'center', textAlignVertical: 'center', backgroundColor: interests.includes(item) ? '#000' : '#fff', paddingRight: 10 }}> {item}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

        </View>
      </ScrollView>
      {/* {interests.length > 0 && (
        <TouchableOpacity activeOpacity={0.4} style={{ position: 'absolute', bottom: 20, marginTop: 10, alignSelf: 'center', width: '90%', }} onPress={() => { navigation.goBack() }}>
          <Text style={{ paddingHorizontal: 20, paddingVertical: 10, fontSize: 12, fontFamily: 'Poppins_800ExtraBold', color: '#fff', backgroundColor: '#DCADAD', borderRadius: Platform.OS == 'android' ? 30 : 20, textAlign: 'center', overflow: 'hidden', }}>Back</Text>
        </TouchableOpacity>
      )} */}

      <Animated.View
        style={{
          position: 'absolute',
          bottom: interpolatedBottom,
          marginTop: 10,
          alignSelf: 'center',
          width: '90%',
        }}
      >
        <TouchableOpacity
          activeOpacity={0.4}
          onPress={() => {
            navigation.goBack();
          }}
          style={{}}
        >
          <Text style={{ paddingHorizontal: 20, paddingVertical: 10, fontSize: 12, fontFamily: 'Poppins_800ExtraBold', color: '#fff', backgroundColor: '#DCADAD', borderRadius: Platform.OS == 'android' ? 30 : 20, textAlign: 'center', overflow: 'hidden', }}>Back</Text>
        </TouchableOpacity>
      </Animated.View>
    </>

  )
}

export default Interests