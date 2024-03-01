import { View, Text, Animated, TouchableOpacity, Platform } from 'react-native'
import React, { useRef, useState } from 'react'
import Modal from 'react-native-modal';
// import { useRecoilState } from 'recoil';
// import { userState } from '../../utils/Store';
import Card from '../home/Card';
import { users as usersArray } from "../../utils/data";

export type ModalScreenProps = {
    isVisible: boolean
    closeModal: () => void
}

const ProfileModal = (props: ModalScreenProps) => {
    const swipe = useRef(new Animated.ValueXY()).current;
    const [users, setUsers] = useState(usersArray);
    const { name, location, distance, age, image } = users[0]
    const dragHandlers = {};
    const gender = 'Woman';
    const zodiac = 'Aries';
    const img2 = require("../../assets/images/user8.jpg");
    const img3 = require("../../assets/images/user2.jpg");
    const img4 = require("../../assets/images/user3.jpg");
    const img5 = require("../../assets/images/user5.jpg");
    const img6 = require("../../assets/images/user7.jpg");

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

    const personalityTraits = [
        gender,
        '🌏 Punjabi',
        '💪 Yes',
        '👫 Long-term (Open to short-term)',
        '☁️ Straight',
        '🛐 Hindu',
        '🚬 No',
        '🍾 Yes',
        '💊 No',
        `${zodiacSign[zodiac]} ${zodiac}`,
        '🗣️ Hindi, English, Japanese',
    ];

    const Interests = [
        'Cooking 🍳',
        'Bathing 🚿',
        'Chatting 🗣️',
        'Winning 🥇',
        'Dancing 💃',
        'Reading 📖',
        'Traveling ✈️',
    ];

    const profileData = { name, location, distance, age, image, personalityTraits, Interests, img2, img3, img4, img5, img6 }

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

            {/* <Card
                key={name}
                profileData={profileData}
                isFirst={false}
                swipe={swipe}
                titlSign={''}
                {...dragHandlers}
            /> */}

            {profileData && (
                <Card
                    key={name}
                    profileData={profileData}
                    isFirst={false}
                    swipe={swipe}
                    titlSign={''}
                    {...dragHandlers}
                />
            )}

            {/* {(
                users.map(({ name, image, location, distance, age }, index) => {
                    const isFirst = index == 0;
                    // const dragHandlers = isFirst ? panResponder.panHandlers : { };
                    const profileData = { name, location, distance, age, image, personalityTraits, Interests, img2, img3, img4, img5, img6 }

                    return (
                        <Card
                            key={name}
                            profileData={profileData}
                            isFirst={false}
                            swipe={swipe}
                            titlSign={''}
                            {...dragHandlers}
                        />
                    )
                }).reverse()
            )} */}


            {/* </View> */}
            <TouchableOpacity style={{ width: '50%', alignSelf: 'center', position: 'absolute', bottom: 10 }} onPress={props.closeModal}>
                <Text style={{ paddingHorizontal: 20, paddingVertical: 10, backgroundColor: '#0089BA', borderRadius: Platform.OS === 'ios' ? 15 : 30, textAlign: 'center', fontFamily: 'Poppins_700Bold', fontSize: 16, color: '#fff' }}>Close</Text>
            </TouchableOpacity>
        </Modal>
    )
}

export default ProfileModal