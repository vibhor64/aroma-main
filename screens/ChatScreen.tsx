import { View, Text, TouchableOpacity, FlatList, Image, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
// import Loader from '../Loader';
// import { useFonts } from 'expo-font';
// import { Fonts } from '../fonts';
import ChatCard from '../components/chat/chatCard';
import ExtendMatchModal from '../components/chat/ExtendMatchModal';



const ChatScreen = () => {

  const chatData = [
    {
      "id": "1",
      "name": "Gingy",
      "image": require('../assets/images/user5.jpg'),
      "message": "Hello, how are you?",
      "new": true,
      "timeLeft": 1
    },
    {
      "id": "2",
      "name": "Jane Smith",
      "image": require('../assets/images/user6.jpg'),
      "message": "Hi there! What's up?",
      "new": true,
      "timeLeft": 2
    },
    {
      "id": "4",
      "name": "Nami Swan",
      "image": require('../assets/images/user7.jpg'),
      "message": "🤣",
      "new": true,
      "timeLeft": 4
    },
    {
      "id": "3",
      "name": "Alice Johnson",
      "image": require('../assets/images/user8.jpg'),
      "message": "Hey, long time no see!",
      "new": false,
      "timeLeft": 7
    },
    {
      "id": "5",
      "name": "Wolverine",
      "image": require('../assets/images/user1.jpg'),
      "message": "Don't do that to me now 💀",
      "new": false,
      "timeLeft": 7
    },
    {
      "id": "6",
      "name": "Wolverine",
      "image": require('../assets/images/user1.jpg'),
      "message": "Don't do that to me now 💀",
      "new": false,
      "timeLeft": 5
    },
    {
      "id": "8",
      "name": "Wolverine",
      "image": require('../assets/images/user1.jpg'),
      "message": "Don't do that to me now 💀",
      "new": false,
      "timeLeft": 3
    },
  ]

  const [isModalVisible, setModalVisible] = useState(false);
  const [timeLeftInModal, setTimeLeftInModal] = useState(0);

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
    <SafeAreaView style={{ flex: 1 }}>
      {/* Header */}
      <View style={{ marginVertical: 10, flexDirection: 'row', alignItems: 'center', width: '100%', justifyContent: 'center' }}>
        <Text
          style={{ fontFamily: 'Italiana', color: '#000', fontSize: 30 }}>
          Aroma
        </Text>
      </View>

      {chatData.length>0 ? (
        <>
      {/* Matches */}

      <View>
        <Text style={{ fontFamily: 'Poppins_700Bold', color: '#000', fontSize: 14, marginLeft: 20 }}>Matches</Text>
      </View>
      <View>
        <FlatList
          data={chatData.sort((a, b) => a.timeLeft - b.timeLeft)} 
          keyExtractor={(item, index) => index.toString()} // Assuming each item has a unique index
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => { toggleModal(); setTimeLeftInModal(item.timeLeft); }}>
              <Image source={item.image} style={{
                width: 50, height: 50, borderRadius: 50, marginLeft: 20, marginTop: 10,
                borderColor: '#DCADAD', borderWidth: 2, opacity: (item.timeLeft / 7)
              }} />
            </TouchableOpacity>
          )}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>

      {/* Chats */}
      <View>
        <Text style={{ fontFamily: 'Poppins_700Bold', color: '#000', fontSize: 14, marginLeft: 20, marginTop: 20 }}>Recents</Text>
      </View>

      <View style={{ marginHorizontal: 20, flex: 1, marginBottom: 100 }}>
        {/* Map through the chatData and render ChatCard for each item */}
        {/* {chatData.map((chatItem) => (
            <ChatCard key={chatItem.id} data={chatItem} />
            ))} */}

        <FlatList
          data={chatData}
          renderItem={({ item }) => (
            <ChatCard key={item.id} data={item} />
          )}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
        />

      </View>
      </>) : (
        <View style={{ flex: 1, alignItems: 'center' }}>
          <Text style={{ fontFamily: 'Poppins_700Bold', color: '#000', fontSize: 24, marginTop: 300 }}>No matches found 😢</Text>
          <TouchableOpacity>
            <Text style={{fontFamily: 'Poppins_700Bold', color: '#fff', fontSize: 20, marginTop: 190, backgroundColor: '#E42828', padding: 10, borderRadius: 30, paddingHorizontal: 30 }}>Get More Matches</Text>
          </TouchableOpacity>
        </View>
      )}

      <ExtendMatchModal isVisible={isModalVisible} closeModal={toggleModal} timeLeft={timeLeftInModal} />

    </SafeAreaView>
  )
}

export default ChatScreen