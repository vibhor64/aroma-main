import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Modal from 'react-native-modal';
import { Fonts } from '../../fonts';

export type ModalScreenProps = {
  isVisible: boolean
  closeModal: () => void
}

const ChatDetailsModal = (props: ModalScreenProps) => {
    
  return (
    <Modal
    isVisible={props.isVisible}
    style={{ margin: 0, justifyContent: 'flex-end', }}
    onBackdropPress={props.closeModal}
    onBackButtonPress={props.closeModal}
    hideModalContentWhileAnimating={true}
    animationInTiming={400}
    animationOutTiming={400}
    useNativeDriver= {true}
    >
      <View style={{ backgroundColor: 'white', padding: 16, height: 'auto', justifyContent: 'center', alignItems: 'center', borderTopEndRadius: 30, borderTopStartRadius: 30, width: '100%' }}>
        <TouchableOpacity onPress={props.closeModal} style={{ paddingVertical: 8, width: '100%',alignItems: 'center',  borderColor: '#D9D9D9', }}>
          <Text style={{ color: '#B0B0B0', fontFamily: 'Poppins_600SemiBold'}}>View Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={props.closeModal} style={{ paddingVertical: 8, width: '100%',alignItems: 'center', borderTopWidth: 1, borderColor: '#D9D9D9',}}>
          <Text style={{ color: '#B0B0B0', fontFamily: 'Poppins_600SemiBold'}}>Extend</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={props.closeModal} style={{ paddingVertical: 8, width: '100%',alignItems: 'center', borderTopWidth: 1, borderColor: '#D9D9D9', }}>
          <Text style={{ color: '#B0B0B0', fontFamily: 'Poppins_600SemiBold'}}>Unmatch</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  )
}

export default ChatDetailsModal