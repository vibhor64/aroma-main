import { View, Text } from 'react-native'
import React from 'react'

type message = {
    message: any
  }
  
const SenderMessage = (props: message) => {
  return (
    <View style={{backgroundColor: '#DCADAD', borderRadius: 20, padding: 15, marginRight: 10, marginLeft: 'auto', alignSelf: 'flex-start', maxWidth: '80%', borderBottomRightRadius: 0, marginVertical: 5,  paddingVertical: 12}}>
      <Text style={{color: 'white', fontFamily: 'Poppins_400Regular', fontSize: 12}}>{props.message.message}</Text>
    </View>
  )
}

export default SenderMessage