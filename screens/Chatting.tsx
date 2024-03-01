import { View, Text, Image, TextInput, Platform, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, FlatList, TouchableOpacity, Animated } from 'react-native';
import React, { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RouteProp, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { HomeStackNavigatorParamList } from '../my-app';
import { ArrowLeftIcon, CameraIcon, EllipsisVerticalIcon, PaperAirplaneIcon } from "react-native-heroicons/outline";
import { Fonts } from '../fonts';
import Loader from '../Loader';
import RecieverMessage from '../components/chat/RecieverMessage';
import SenderMessage from '../components/chat/SenderMessage';
import ChatDetailsModal from '../components/chat/ChatDetailsModal';

// Define the params type for the 'Chatting' route
type ChattingParams = {
    data: any;
};

// Define the navigation prop type
type ChattingNavigationProp = NativeStackNavigationProp<HomeStackNavigatorParamList, 'Chatting'>;

// Define the props type for the Chatting component
type ChattingProps = {
    route: RouteProp<HomeStackNavigatorParamList, 'Chatting'>;
    navigation: ChattingNavigationProp;
};

const messages = [
    {
        "timestamp": "2024-02-18T10:00:00",
        "sender": "user",
        "message": "Hi there! How are you doing?"
    },
    {
        "timestamp": "2024-02-18T10:02:00",
        "sender": "bot",
        "message": "Hello! I'm just a dummy bot, so I don't have feelings, but I'm here to help. How can I assist you today?"
    },
    {
        "timestamp": "2024-02-18T10:05:00",
        "sender": "user",
        "message": "I need some information about your products."
    },
    {
        "timestamp": "2024-02-18T10:07:00",
        "sender": "bot",
        "message": "Sure thing! What specific information are you looking for?"
    },
    {
        "timestamp": "2024-02-18T10:10:00",
        "sender": "user",
        "message": "I'm interested in your pricing and features."
    },
    {
        "timestamp": "2024-02-18T10:12:00",
        "sender": "bot",
        "message": "Great! Our pricing varies based on the product and features you choose. Let me provide you with some details."
    },
    {
        "timestamp": "2024-02-18T10:15:00",
        "sender": "user",
        "message": "That sounds good. Please go ahead."
    },
    {
        "timestamp": "2024-02-18T10:18:00",
        "sender": "bot",
        "message": "Our basic package starts at $49/month and includes..."
    },
    {
        "timestamp": "2024-02-18T10:20:00",
        "sender": "user",
        "message": "What features are included in the basic package?"
    },
    {
        "timestamp": "2024-02-18T10:22:00",
        "sender": "bot",
        "message": "The basic package includes X, Y, and Z features. X allows you to do A, B, and C. Y provides D, E, and F capabilities..."
    },
    {
        "timestamp": "2024-02-18T10:25:00",
        "sender": "user",
        "message": "I see, that sounds good. What about the premium package - what does that include and what's the pricing?"
    },
    {
        "timestamp": "2024-02-18T10:27:00",
        "sender": "bot",
        "message": "Our premium package is $99/month and builds on the basic with these enhanced features..."
    },
    {
        "timestamp": "2024-02-18T10:30:00",
        "sender": "user",
        "message": "Hmm those premium features would be useful. Is there an enterprise package too?"
    },
    {
        "timestamp": "2024-02-18T10:32:00",
        "sender": "bot",
        "message": "Yes, we do offer custom enterprise packages for larger organizations. Those typically start at $249/month but include..."
    },
    {
        "timestamp": "2024-02-18T10:35:00",
        "sender": "user",
        "message": "Got it, that enterprise package sounds like it has some great capabilities. Can you tell me more about the onboarding/setup process works?"
    },
    {
        "timestamp": "2024-02-18T10:37:00",
        "sender": "bot",
        "message": "Sure, getting set up with our platform is quite straightforward. First you would create an account and add your team members..."
    },
    {
        "timestamp": "2024-02-18T10:40:00",
        "sender": "user",
        "message": "Easy enough! What kind of training resources do you provide to help us get the most value?"
    },
    {
        "timestamp": "2024-02-18T10:42:00",
        "sender": "bot",
        "message": "We offer extensive training resources including onboarding calls, documentation, video tutorials, weekly webinars, and a online community forum..."
    },
    {
        "timestamp": "2024-02-18T10:45:00",
        "sender": "user",
        "message": "Fantastic! And do you have any case studies from current customers showing the benefits they've seen?"
    },
    {
        "timestamp": "2024-02-18T10:47:00",
        "sender": "bot",
        "message": "We have numerous case studies across industries like healthcare, finance, retail, showing major improvements in metrics like productivity, customer satisfaction, and revenue..."
    },
    {
        "timestamp": "2024-02-18T10:50:00",
        "sender": "user",
        "message": "I'd love to see some of those if you can share any healthcare examples?"
    },
    {
        "timestamp": "2024-02-18T10:52:00",
        "sender": "bot",
        "message": "Here's a link to a great case study from a large hospital system that used our platform to reduce patient readmission rates..."
    },
    {
        "timestamp": "2024-02-18T10:55:00",
        "sender": "user",
        "message": "This is really helpful information, I appreciate you taking the time to explain it all. What are the next steps if we want to get started?"
    },
    {
        "timestamp": "2024-02-18T10:57:00",
        "sender": "bot",
        "message": "If you're ready to give us a try, the next step would be to kick off a trial account so you can test out the platform. I can have someone from sales reach out to get that scheduled and answer any other questions you might have."
    },
    {
        "timestamp": "2024-02-18T11:00:00",
        "sender": "user",
        "message": "That would be great, please do have someone contact me about setting up a trial. Here's my email address..."
    },
    {
        "timestamp": "2024-02-18T11:02:00",
        "sender": "bot",
        "message": "Wonderful, I've notified our sales team and they will follow up shortly about getting you setup with a trial account. Please let me know if any other questions come up in the meantime!"
    },
    {
        "timestamp": "2024-02-18T11:05:00",
        "sender": "user",
        "message": "Thanks, that all sounds good!"
    },
    {
        "timestamp": "2024-02-18T11:07:00",
        "sender": "bot",
        "message": "My pleasure! We look forward to working with you and helping your organization."
    },
    {
        "timestamp": "2024-02-18T11:10:00",
        "sender": "user",
        "message": "We are excited to see what your platform can do for our workflow."
    },
    {
        "timestamp": "2024-02-18T11:12:00",
        "sender": "bot",
        "message": "That's great to hear! I'm confident you'll find valuable capabilities that make your workflows more efficient. Please let me know if you have any other questions pop up."
    },
    {
        "timestamp": "2024-02-18T11:15:00",
        "sender": "user",
        "message": "Will do, thanks again!"
    },
    {
        "timestamp": "2024-02-18T11:17:00",
        "sender": "bot",
        "message": "You're welcome!"
    },
]

const Chatting: React.FC<ChattingProps> = ({ route }) => {
    const [keyboardHeight, setKeyboardHeight] = useState(0);
  const animatedKeyboardHeight = useRef(new Animated.Value(0)).current;

  function onKeyboardShow(event: KeyboardEvent) {
    Animated.timing(animatedKeyboardHeight, {
      toValue: event.endCoordinates.height,
      duration: 300, // Adjust the duration as needed
      useNativeDriver: false, // Set to false because 'height' is not supported by native driver
    }).start();
  }

  function onKeyboardHide() {
    Animated.timing(animatedKeyboardHeight, {
      toValue: 0,
      duration: 3, // Adjust the duration as needed
      useNativeDriver: false,
    }).start();
  }

  useEffect(() => {
    const onShow = Keyboard.addListener('keyboardDidShow', onKeyboardShow);
    const onHide = Keyboard.addListener('keyboardDidHide', onKeyboardHide);

    return () => {
      onShow.remove();
      onHide.remove();
    };
  }, []);

  useEffect(() => {
    setKeyboardHeight(animatedKeyboardHeight);
  }, [animatedKeyboardHeight]);
    // Access the data from the route.params
    const { data } = route.params;
    const navigation = useNavigation();
    const [text, setText] = React.useState('');
    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    const sendMessage = () => {
        const trimmedText = text.trim();
        setText('');
        console.log(trimmedText);
        if (trimmedText.length > 0) {
          messages.push({
            timestamp: new Date().toISOString(),
            sender: 'user',
            message: trimmedText
          });
          scrollToBottom();
        }
      };

    const flatListRef = useRef<FlatList | null>(null);

    // const scrollToBottom = useCallback(() => {
    //     flatListRef.current?.scrollToEnd({ animated: true });
    // }, []);
    const scrollToBottom = () => {
        flatListRef.current?.scrollToEnd({ animated: true, });
    };

    useLayoutEffect(() => {
        scrollToBottom();
    })
    useEffect(() => {
        // Scroll to the bottom with a 1-second timeout
        const timeoutId = setTimeout(() => {
            scrollToBottom();
        }, 200);

        // Clear the timeout to avoid potential issues
        return () => clearTimeout(timeoutId);
    }, [scrollToBottom]);

    return (
        <>
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            {/* Header */}
            <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%', paddingBottom: 10, paddingTop: 5, shadowColor: "#000000", shadowOffset: { width: 0, height: 1, }, shadowOpacity: 0.17, shadowRadius: 1.51, elevation: 4, backgroundColor: 'white', }}>

                <ArrowLeftIcon size={30} onPress={() => navigation.goBack()} style={{ marginLeft: 10, marginTop: 10 }} color={"black"} />
                <Image source={data.image} style={{ width: 40, height: 40, borderRadius: 50, marginTop: 10, marginLeft: 10 }} />
                <Text style={{ marginLeft: 15, fontFamily: 'Poppins_700Bold', fontSize: 20, marginTop: 10 }}>{data.name}</Text>
                <TouchableOpacity style={{ marginLeft: 'auto', marginRight: 10, marginTop: 10 }} onPress={toggleModal}>
                    <EllipsisVerticalIcon color={"#999999"} size={30} />
                </TouchableOpacity>

            </View>

            {/* Chatting */}
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <FlatList
                    // ref={scrollToBottom()}
                    data={messages}
                    ref={flatListRef}
                    keyExtractor={(item) => item.timestamp}
                    contentContainerStyle={{ marginTop: 10,}}
                    renderItem={({ item: message }) =>
                        message.sender === 'bot' ? (
                            <RecieverMessage key={message.timestamp} message={message} />
                        ) : (
                            <SenderMessage key={message.timestamp} message={message} />
                        )
                    }
                    ListFooterComponent={() => <View style={{ height: Platform.OS === 'ios' ? 55 : 75, }} />}
                />
            </TouchableWithoutFeedback>

            <View style={{ position: 'absolute', bottom: Platform.OS === 'ios' ? 15 : 0, width: '100%', flexDirection: 'row', alignItems: 'center', backgroundColor: 'white', }}>
                <CameraIcon size={30} color={"#000"} style={{ marginLeft: 10 }} />
                <TextInput
                    style={{ height: 'auto', borderColor: 'gray', borderWidth: 0, borderRadius: 7, margin: 10, backgroundColor: '#EDEDED', padding: 10, fontFamily: 'Poppins_300Light', fontSize: 14, color: 'black', flex: 1 }}
                    placeholder='Send Message'
                    placeholderTextColor={'#fff'}
                    onChangeText={(text) => setText(text)}
                    onSubmitEditing={() => sendMessage()}
                    value={text}
                    
                />
                <PaperAirplaneIcon size={30} color={"#000"} style={{ marginRight: 10 }} onPress={() => sendMessage()} />
            </View>
            {/* </KeyboardAvoidingView> */}
            <ChatDetailsModal isVisible={isModalVisible} closeModal={toggleModal}/>
            

        </SafeAreaView>
            {Platform.OS === 'ios' && (
            <Animated.View style={{ height: keyboardHeight, backgroundColor: 'white' }} />
            )}
            </>
    );
};

export default Chatting;