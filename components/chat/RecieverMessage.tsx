import { View, Text } from 'react-native'
import React from 'react'

type message = {
  message: any
  timestamp: any
}

const RecieverMessage = (props: message) => {
  return (
    <>
    <View style={{backgroundColor: '#f7f8fd', borderRadius: 20, padding: 15, marginLeft: 10, marginRight: 'auto', alignSelf: 'flex-start', marginVertical: 5, maxWidth: '80%', borderBottomLeftRadius: 0, paddingVertical: 12}}>
      <Text style={{color: 'black', fontFamily: 'Poppins_400Regular', fontSize: 12}}>{props.message.message}</Text>
    </View>
    <Text style={{color: '#dadada', fontFamily: 'Poppins_400Regular', fontSize: 7, marginLeft: 15}}>
    {props.timestamp}</Text>
    </>
  )
}

export default RecieverMessage