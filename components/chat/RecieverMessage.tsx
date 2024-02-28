import { View, Text } from 'react-native'
import React from 'react'

type message = {
  message: any
}

const RecieverMessage = (props: message) => {
  return (
    <View style={{backgroundColor: '#D9D9D9', borderRadius: 20, padding: 15, marginLeft: 10, marginRight: 'auto', alignSelf: 'flex-start', marginVertical: 5, maxWidth: '80%', borderBottomLeftRadius: 0, paddingVertical: 12}}>
      <Text style={{color: 'white', fontFamily: 'Poppins_400Regular', fontSize: 12}}>{props.message.message}</Text>
    </View>
  )
}

export default RecieverMessage