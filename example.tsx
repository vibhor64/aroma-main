import React, { useEffect } from 'react';
import { StatusBar, Text, View } from 'react-native';
import { useFonts } from 'expo-font';

export default () => {
  let [fontsLoaded] = useFonts({
    'Italiana': require('./assets/fonts/Italiana.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#000' }}>
      <StatusBar barStyle={'light-content'} />
      <Text
        style={{ fontFamily: 'Italiana', color: '#fff', fontSize: 24 }}>
        Aroma
      </Text>
    </View>
  );
};
