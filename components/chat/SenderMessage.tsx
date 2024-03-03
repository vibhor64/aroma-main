import { View, Text } from 'react-native'
import React from 'react'

type message = {
    message: any
    timestamp: any
  }
  
const SenderMessage = (props: message) => {
  return (
    <>
    <View style={{backgroundColor: '#A47879', borderRadius: 20, padding: 15, marginRight: 10, marginLeft: 'auto', alignSelf: 'flex-start', maxWidth: '80%', borderBottomRightRadius: 0, marginVertical: 5,  paddingVertical: 12}}>
      <Text style={{color: 'white', fontFamily: 'Poppins_400Regular', fontSize: 12}}>{props.message.message}</Text>
    </View>
      <Text style={{color: '#dadada', fontFamily: 'Poppins_400Regular', fontSize: 7, alignSelf: 'flex-end', marginRight: 15}}>
        {props.timestamp}</Text>
    </>
  )
}

export default SenderMessage