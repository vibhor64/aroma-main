import { View, Text, TouchableOpacity, Platform } from 'react-native'
import React from 'react'

type CardProps = {
  prevCost: string;
  cost: string;
  duration: string;
  save: string;
}


const PurchaseCards: React.FC<CardProps> = ({ prevCost, cost, duration, save }) => {
  return (
    <TouchableOpacity activeOpacity={0.4} style={{ backgroundColor: 'white', borderRadius: 18, padding: 20, marginRight: 20}}>
      <View style={{flexDirection: 'row'}}>
        <Text style={{fontFamily: 'Poppins_700Bold', fontSize: 16, color: 'black', textDecorationLine: 'line-through',}}>{prevCost}</Text>   
        <Text style={{fontFamily: 'Poppins_700Bold', fontSize: 16, color: 'black',}}> {cost} INR /wk</Text>   
        <Text style={{fontFamily: 'Poppins_400Regular', fontSize: 10, color: '#E42882', marginLeft: 20, borderWidth: 2, borderRadius: Platform.OS === 'ios' ? 12 : 20, borderColor: '#E42882', paddingHorizontal: 5, marginBottom: 13, paddingTop: 3, paddingLeft: 7, paddingBottom: Platform.OS === 'ios' ? 3 : 0}}>Popular</Text>
      </View>
      <View style={{flexDirection: 'row', marginTop: 20}}>
        <Text style={{fontFamily: 'Poppins_700Bold', fontSize: 16, color: '#999999'}}>{duration}</Text>
        <Text style={{fontFamily: 'Poppins_700Bold', fontSize: 13,  marginLeft: 'auto', borderRadius: 20, paddingHorizontal: 5, paddingTop: 3, paddingLeft: 7, backgroundColor: '#FFC75F'}}>Save {save}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default PurchaseCards