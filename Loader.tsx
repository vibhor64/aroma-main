import { View, Text, Image, StatusBar } from 'react-native'
import React from 'react'

const Loader = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#000' }}>
        <StatusBar barStyle={'light-content'} />
      <Image style={{ width: 250, height: 250 }} source={require('./assets/images/loader.jpg')} /> 
    </View>
  )
}

export default Loader