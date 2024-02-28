import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import { HomeStackNavigatorParamList } from './my-app';
import LoginScreen from './screens//login/LoginScreen';
import { isSignedIn } from './utils/Store';
import { useRecoilState } from 'recoil';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProfileScreen from './screens/ProfileScreen';
import { Image, View } from 'react-native';
import PremiumScreen from './screens/PremiumScreen';
import LikeScreen from './screens/LikeScreen';
import ChatScreen from './screens/ChatScreen';
import Chatting from './screens/Chatting';
import WelcomeScreen from './screens/login/WelcomeScreen';
import OtpScreen from './screens/login/OtpScreen';
import NameScreen from './screens/login/NameScreen';
import ImagesAndPromptsScreen from './screens/login/ImagesScreen';
import ImagesScreen from './screens/login/ImagesScreen';
import TraitScreen from './screens/login/TraitScreen';
import InterestsScreen from './screens/login/InterestsScreen';
import PromptsScreen from './screens/login/PromptsScreen';
import OutlookScreen from './screens/login/OutlookScreen';

const Stack = createNativeStackNavigator<HomeStackNavigatorParamList>();
const Tab = createBottomTabNavigator<HomeStackNavigatorParamList>();

export default function StackNavigator() {
    const [SignedIn, setSignedIn] = useRecoilState(isSignedIn);

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            {SignedIn ? (
                <>
                    <Stack.Screen name="Main">
                        {() => (
                            <Tab.Navigator initialRouteName='Home'
                                screenOptions={{
                                    headerShown: false, tabBarShowLabel: false, tabBarStyle: {
                                        position: 'absolute',
                                        bottom: 28,
                                        left: 10,
                                        right: 10,
                                        height: 70,
                                        borderRadius: 30,
                                        backgroundColor: '#000',
                                        paddingBottom: 0,
                                        shadowColor: "#000000",
                                        shadowOffset: {
                                            width: 0,
                                            height: 6,
                                        },
                                        shadowOpacity: 0.21,
                                        shadowRadius: 6.65,
                                        elevation: 9
                                    }
                                }}>

                                {/* Tab Screens */}

                                <Tab.Screen name="Profile" component={ProfileScreen} options={{
                                    tabBarIcon: ({ focused }) => (
                                        <View>
                                            <Image source={require('./assets/icons/user.png')} style={{ width: 28, height: 28, tintColor: focused ? '#fff' : '#A0A0A0', }} />
                                        </View>
                                    ),
                                }} />
                                <Tab.Screen name="Premium" component={PremiumScreen} options={{
                                    tabBarIcon: ({ focused }) => (
                                        <View>
                                            <Image source={require('./assets/icons/gem.png')} style={{ width: 28, height: 28, tintColor: focused ? '#fff' : '#A0A0A0' }} />
                                        </View>
                                    ),
                                }} />
                                <Tab.Screen name="Home" component={HomeScreen} options={{
                                    tabBarIcon: ({ focused }) => (
                                        <View>
                                            <Image source={require('./assets/icons/discover.png')} style={{ width: 28, height: 28, tintColor: focused ? '#fff' : '#A0A0A0' }} />
                                        </View>
                                    ),
                                }} />
                                <Tab.Screen name="Like" component={LikeScreen} options={{
                                    tabBarIcon: ({ focused }) => (
                                        <View>
                                            <Image source={require('./assets/icons/heart.png')} style={{ width: 28, height: 28, tintColor: focused ? '#fff' : '#A0A0A0' }} />
                                        </View>
                                    ),
                                }} />
                                <Tab.Screen name="Chat" component={ChatScreen} options={{
                                    tabBarIcon: ({ focused }) => (
                                        <View>
                                            <Image source={require('./assets/icons/chat.png')} style={{ width: 28, height: 28, tintColor: focused ? '#fff' : '#A0A0A0' }} />
                                        </View>
                                    ),
                                }} />
                            </Tab.Navigator>

                        )}
                    </Stack.Screen>
                    <Stack.Screen name="Chatting" component={Chatting} />
                </>
            ) : (
                <Stack.Group screenOptions={{ headerShown: false}}>
                    <Stack.Screen name="Welcome" component={WelcomeScreen} />
                    <Stack.Screen name="Login" component={LoginScreen} />
                    <Stack.Screen name="OtpScreen" component={OtpScreen} />
                    <Stack.Screen name="NameScreen" component={NameScreen} />
                    <Stack.Screen name="Images" component={ImagesScreen} />
                    <Stack.Screen name="Traits" component={TraitScreen} />
                    <Stack.Screen name="Interests" component={InterestsScreen} />
                    <Stack.Screen name="Prompts" component={PromptsScreen} />
                    <Stack.Screen name="Outlook" component={OutlookScreen} />
                </Stack.Group>
            )}
        </Stack.Navigator>
    );
}