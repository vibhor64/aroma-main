import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Modal from 'react-native-modal';
import { Fonts } from '../../fonts';

export type ModalScreenProps = {
  isVisible: boolean
  closeModal: () => void
  timeLeft: number
}

const ExtendMatchModal = (props: ModalScreenProps) => {
    const [fontLoaded] = Fonts();
    if (!fontLoaded) {
        return null;
    }
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
      <View style={{ backgroundColor: 'white', padding: 16, height: 200, justifyContent: 'center', alignItems: 'center', borderTopEndRadius: 30, borderTopStartRadius: 30 }}>
        <Text style={{fontFamily: 'Poppins_600SemiBold', fontSize: 20}}>{props.timeLeft} Day{props.timeLeft > 1 ? 's' : ''} Left</Text>
        <TouchableOpacity onPress={props.closeModal}>
          <Text style={{ color: '#4169e1'}}>Extend</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  )
}

export default ExtendMatchModal