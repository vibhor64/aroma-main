import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Fonts } from '../../fonts';
import Loader from '../../Loader';
import { EllipsisHorizontalIcon } from "react-native-heroicons/outline";
import { useNavigation } from '@react-navigation/native';
import { HomeStackNavigatorParamList } from '../../my-app';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import ChatDetailsModal from './ChatDetailsModal';

type MainScreenNavigationProp = NativeStackNavigationProp<HomeStackNavigatorParamList, 'Main'>;

interface MainProps {
  navigation: MainScreenNavigationProp;
}

export type ChatCardProps = {
    data: any; // Adjust the type accordingly based on the structure of your data
};

const ChatCard: React.FC<ChatCardProps> = ({ data }) => {
    const navigation = useNavigation();
    const [isModalVisible, setModalVisible] = useState(false);
    const toggleModal = () => {
        setModalVisible(!isModalVisible);
      };
    const [fontLoaded] = Fonts();
    if (!fontLoaded) {
        return <Loader />;
    }
    return (
        <TouchableOpacity activeOpacity={0.5} style={{ backgroundColor: 'white', padding: 10, marginVertical: 5, paddingVertical: 16, borderRadius: 15, }}
        onPress={() => navigation.navigate('Chatting', { data: data })}>
            <View style={{ flexDirection: 'row', }}>
                <Image source={data.image} style={{ width: 53, height: 53, borderRadius: 50 }} />

                <View style={{ marginLeft: 13, marginTop: 5, flexDirection: 'column' }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 13, fontFamily: 'Poppins_700Bold' }}>{data.name}</Text>
                        {data.new && (
                            <View style={{ backgroundColor: '#E42882', borderRadius: 50, width: 7, height: 7, marginTop: 7, marginLeft: 5 }}></View>)}
                    </View>
                    <Text style={{ fontSize: 11, fontFamily: data.new ? 'Poppins_600SemiBold' : 'Poppins_400Regular', color: '#A9A9A9' }}>{data.message}</Text>
                </View>
                <TouchableOpacity style={{ position: 'absolute', right: 0, marginTop: 5 }} activeOpacity={0.1} onPress={toggleModal}>
                    <EllipsisHorizontalIcon size={28} color={'#999999'} />
                </TouchableOpacity>
            </View>
            <ChatDetailsModal isVisible={isModalVisible} closeModal={toggleModal}/>
        </TouchableOpacity>
    );
};

export default ChatCard;
