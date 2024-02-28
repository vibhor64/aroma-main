import React, { FC } from 'react';
import { Modal, View, Text, TouchableOpacity, Image } from 'react-native';
import { Fonts } from '../../fonts';

interface ExtendMatchModalProps {
    isVisible: boolean;
    closeModal: () => void;
}

const Matched: FC<ExtendMatchModalProps> = ({ isVisible, closeModal }) => {
    const [fontsLoaded] = Fonts();
    if (!fontsLoaded) {
        return null;
    }
    return (
        <Modal
            animationType="slide"
            //    transparent={true}
            style={{ justifyContent: 'flex-end', height: 300, }}
            visible={isVisible}
            onRequestClose={closeModal}
        >
            <View style={{ padding: 16, flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#DCADAD' }}>
                <Image resizeMode='contain' source={require('../../assets/images/match.png')} style={{ width: 300, marginVertical: 10, tintColor: 'white' }} />
                <Text style={{ fontSize: 12, textAlign: 'center', fontFamily: 'Poppins_400Regular', color: 'white' }}>You and Hannah Montana liked each other!</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 30 }}>
                    <Image source={require('../../assets/images/user1.jpg')} style={{ width: 150, height: 150, borderRadius: 100, marginVertical: 10, marginHorizontal: 10, }} />
                    <Image source={require('../../assets/images/user2.jpg')} style={{ width: 150, height: 150, borderRadius: 100, marginVertical: 10, marginHorizontal: 10, }} />
                </View>
                <TouchableOpacity onPress={closeModal}>
                    <Text style={{ fontSize: 16, fontFamily: 'Poppins_600SemiBold', backgroundColor: 'white', padding: 30, borderRadius: 40, paddingVertical: 20, }}>Send A Message</Text>
                </TouchableOpacity>
            </View>
        </Modal>
    );
};

export default Matched;