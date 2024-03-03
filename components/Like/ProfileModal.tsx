import { View, Text, Animated, TouchableOpacity, Platform, Image } from 'react-native'
import React, { useRef, useState } from 'react'
import Modal from 'react-native-modal';
// import { useRecoilState } from 'recoil';
// import { userState } from '../../utils/Store';
import Card from '../home/Card';
import { CheckBadgeIcon } from 'react-native-heroicons/solid';
import Matched from '../home/Matched';
// import { users as usersArray } from "../../utils/data";

export type ModalScreenProps = {
  isVisible: boolean
  closeModal: () => void
  selectedItem: any
}

const ProfileModal = (props: ModalScreenProps) => {
  if (!props.selectedItem) {
    // Handle the case when selectedItem is null
    return null; // or return a loading state or an error message
  }
  const swipe = useRef(new Animated.ValueXY()).current;
  // const [users, setUsers] = useState(usersArray);
  const selectedItem = props.selectedItem;
  // console.log(selectedItem)
  // console.log(selectedItem.traits)
  let { name, showNameOnProfile,bio, age, image, gender, img2, img3, img4, img5, img6, traits, interests, prompt1, prompt2, prompt3 } = selectedItem
  if (!showNameOnProfile){
    name = name[0];
}
const location = traits[0]?.hometown
  // const img2 = require("../../assets/images/user8.jpg");
  // const img3 = require("../../assets/images/user2.jpg");
  // const img4 = require("../../assets/images/user3.jpg");
  // const img5 = require("../../assets/images/user5.jpg");
  // const img6 = require("../../assets/images/user7.jpg");

  const zodiacSign = {
    "Aries": "♈",
    "Taurus": "♉",
    "Gemini": "♊",
    "Cancer": "♋",
    "Leo": "♌",
    "Virgo": "♍",
    "Libra": "♎",
    "Scorpio": "♏",
    "Sagittarius": "♐",
    "Capricorn": "♑",
    "Aquarius": "♒",
    "Pisces": "♓"
  }

  const formattedArray: string[] = [];

  traits.forEach(data => {

    formattedArray.push(gender);

    if (data.ethnicity) {
      formattedArray.push(`🌏 ${data.ethnicity}`);
    }

    if (data.exercise) {
      formattedArray.push(`💪 ${data.exercise}`);
    }

    if (data.relationshipType) {
      formattedArray.push(`👫 ${data.relationshipType}`);
    }
    if (data.sorientation) {
      formattedArray.push(`☁️ ${data.sorientation}`);
    }

    if (data.religion) {
      formattedArray.push(`🛐 ${data.religion}`);
    }

    if (data.smoke) {
      formattedArray.push(`🚬 ${data.smoke}`);
    }

    if (data.drink) {
      formattedArray.push(`🍾 ${data.drink}`);
    }

    if (data.languages) {
      formattedArray.push(`🗣️ ${data.languages}`);
    }

    if (data.zodiac) {
      formattedArray.push(`${zodiacSign[data.zodiac]} ${data.zodiac}`);
    }
  });

  const personalityTraits = formattedArray
  const Interests = interests
  const profileData = { name, bio, location, age, image, personalityTraits, Interests, img2, img3, img4, img5, img6, prompt1, prompt2, prompt3 }
  const dragHandlers = {};

  const [isModVisible, setModVisible] = useState(false);

    const toggleMod = () => {
      setModVisible(!isModVisible);
    };

  return (
    <Modal
      // animationType="slide"
      // //   transparent={true}
      // visible={props.isVisible}
      // onRequestClose={props.closeModal}
      // presentationStyle='pageSheet'
      // style={{ justifyContent: 'flex-end', overflow: 'hidden', height: '90%', width: '100%', marginTop: 20 }}


      isVisible={props.isVisible}
      style={{ overflow: 'hidden', borderRadius: 30, }}
      onBackdropPress={props.closeModal}
      onBackButtonPress={props.closeModal}
      hideModalContentWhileAnimating={true}
      animationInTiming={400}
      animationOutTiming={200}
      useNativeDriver={true}
    >
      {/* <View style={{ flex: 1, backgroundColor: '#DCADAD', justifyContent: 'center', alignItems: 'center',}}> */}
      <Card
        key={name}
        profileData={profileData}
        isFirst={false}
        swipe={swipe}
        titlSign={''}
        {...dragHandlers}
      />

      <View style={{ flex: 1, alignItems: 'center', flexDirection: 'row', alignSelf: 'center', position: 'absolute', bottom: 10, width: '100%', justifyContent: 'space-around' }}>
      <TouchableOpacity style={{ }} onPress={props.closeModal}>
        {/* <Text style={{ backgroundColor: '#E42828', textAlign: 'center', fontSize: 16, color: '#fff', overflow: 'hidden', borderRadius: 100, height: 70, width: 70, textAlignVertical: 'center', }}>❌</Text> */}
        <Image source={require('../../assets/icons/cross.png')} style={{ backgroundColor: '#E42828', overflow: 'hidden', borderRadius: 100, height: 70, width: 70,  }}/>
      </TouchableOpacity>

      <TouchableOpacity style={{ }} onPress={() => {props.closeModal; toggleMod();}} >
      {/* <Text style={{ backgroundColor: '#63B248', textAlign: 'center', fontSize: 16, color: '#fff', overflow: 'hidden', borderRadius: 100, height: 70, width: 70, textAlignVertical: 'center', }}>✔️</Text> */}
      <CheckBadgeIcon size={90} color={'#63B248'} />
      </TouchableOpacity>
      </View>

      <Matched isVisible={isModVisible} closeModal={toggleMod} />
    </Modal>
  )
}

export default ProfileModal