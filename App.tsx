import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './StackNavigator';
import { RecoilRoot } from 'recoil';

export default function App() {
  return (

    <NavigationContainer>
      <RecoilRoot>
        <StackNavigator />
      </RecoilRoot>
    </NavigationContainer>
  
  );
}