import { View, Text, Animated, TouchableOpacity } from 'react-native'
import React, { useRef, useState } from 'react'
import Modal from 'react-native-modal';
import { useRecoilState } from 'recoil';
import { userState } from '../../utils/Store';
import Card from '../home/Card';
import { users as usersArray } from "../../utils/data";

export type ModalScreenProps = {
    isVisible: boolean
    closeModal: () => void
}

const ProfileModal = (props: ModalScreenProps) => {
    const swipe = useRef(new Animated.ValueXY()).current;
    const [users, setUsers] = useState(usersArray);
    const { name, location, distance, age, image} = users[0]
    const dragHandlers = {};

    return (
        <Modal
            // animationType="slide"
            // //   transparent={true}
            // visible={props.isVisible}
            // onRequestClose={props.closeModal}
            // presentationStyle='pageSheet'
            // style={{ justifyContent: 'flex-end', overflow: 'hidden', height: '90%', width: '100%', marginTop: 20 }}


            isVisible={props.isVisible}
            style={{ overflow: 'hidden',borderRadius: 30,}}
            onBackdropPress={props.closeModal}
            onBackButtonPress={props.closeModal}
            hideModalContentWhileAnimating={true}
            animationInTiming={400}
            animationOutTiming={200}
            useNativeDriver={true}
        >
            <View style={{ flex: 1, backgroundColor: '#DCADAD', justifyContent: 'center', alignItems: 'center',}}>
                <Card
                    key={name}
                    name={name}
                    location={location}
                    distance={distance}
                    age={age}
                    image={image}
                    isFirst={false}
                    swipe={swipe}
                    titlSign={''}
                    {...dragHandlers}
                />
            </View>
            <TouchableOpacity style={{width: '50%', alignSelf: 'center',}}>
                <Text style={{paddingHorizontal: 20, paddingVertical: 10, backgroundColor: '#fff', borderRadius: 20, textAlign: 'center'}}>Close</Text>
            </TouchableOpacity>
        </Modal>
    )
}

export default ProfileModal