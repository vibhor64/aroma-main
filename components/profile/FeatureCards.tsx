import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const FeatureCards = () => {
    return (
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <TouchableOpacity>
                <Image source={require('../../assets/icons/add.png')} style={{ width: 20, height: 20, position: 'absolute', top: -5, right: -5, zIndex: 10, backgroundColor: '#fff', borderRadius: 10, padding: 5 }} />
                <View style={{
                    alignItems: 'center', justifyContent: 'center', backgroundColor: '#FFC75F', padding: 15, borderRadius: 10, paddingBottom: 8, shadowColor: "#000000",shadowOffset: { width: 0, height: 3, }, shadowOpacity: 0.17, shadowRadius: 3.05, elevation: 4 }}>
                    <Image source={require('../../assets/icons/spotlight.png')} style={{ width: 60, height: 60 }} />
                    <Text style={{ fontFamily: 'Poppins_600SemiBold', fontSize: 12, color: '#fff', marginTop: 10 }}>Spotlight</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity>
                <Image source={require('../../assets/icons/add.png')} style={{ width: 20, height: 20, position: 'absolute', top: -5, right: -5, zIndex: 10, backgroundColor: '#fff', borderRadius: 10, padding: 5 }} />
                <View style={{
                    alignItems: 'center', justifyContent: 'center', backgroundColor: '#0089BA', padding: 15, borderRadius: 10, paddingBottom: 8, shadowColor: "#000000",shadowOffset: { width: 0, height: 3, }, shadowOpacity: 0.17, shadowRadius: 3.05, elevation: 4 }}>
                    <Image source={require('../../assets/icons/king.png')} style={{ width: 60, height: 60 }} />
                    <Text style={{ fontFamily: 'Poppins_600SemiBold', fontSize: 12, color: '#fff', marginTop: 10 }}>Premium</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity>
                <Image source={require('../../assets/icons/add.png')} style={{ width: 20, height: 20, position: 'absolute', top: -5, right: -5, zIndex: 10, backgroundColor: '#fff', borderRadius: 10, padding: 5 }} />
                <View style={{
                    alignItems: 'center', justifyContent: 'center', backgroundColor: '#FF6F91', padding: 10, borderRadius: 10, paddingBottom: 12, shadowColor: "#000000",shadowOffset: { width: 0, height: 3, }, shadowOpacity: 0.17, shadowRadius: 3.05, elevation: 4 }}>
                    <Image source={require('../../assets/icons/swipeLeft.png')} style={{ width: 60, height: 60 }} />
                    <Text style={{ fontFamily: 'Poppins_600SemiBold', fontSize: 11, color: '#fff', marginTop: 10 }}>Super Swipe</Text>
                </View>
            </TouchableOpacity>


        </View>
    )
}

export default FeatureCards