import { PanResponder, View, Animated, Dimensions, StatusBar, Text, TouchableOpacity, Platform } from 'react-native';
import React, { useCallback, useEffect, useRef, useState } from "react";
import { users as usersArray } from "../utils/data";
import Card from '../components/home/Card';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';
import { AdjustmentsHorizontalIcon as Filter } from "react-native-heroicons/outline";
import LastCard from '../components/home/LastCard';
import Loader from '../Loader';
import Matched from '../components/home/Matched';

const { width, height } = Dimensions.get("screen");

export default function HomeScreen() {

    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
      setModalVisible(!isModalVisible);
    };

    // State to hold the users data
    const [users, setUsers] = useState(usersArray);

    // Animated values for swipe and tilt
    const swipe = useRef(new Animated.ValueXY()).current;
    const titlSign = useRef(new Animated.Value(1)).current;

    useEffect(() => {
        // Reset users data if the array is empty
        if (!users.length) {
            setUsers(usersArray);
        }
    }, [users.length])

    // PanResponder configuration
    const panResponder = PanResponder.create({
        // Allow pan responder to activate
        onMoveShouldSetPanResponder: (event, gestureState) => {
            const dx = gestureState.dx;

            // Only allow the pan responder to activate if the user swipes in the x-direction with a force greater than 10 pixels
            if (Math.abs(dx) > Platform.OS === 'android'? 10 : 10) {
                return true;
            }
            else if (!users.length) {
                return false;
            }
            else {
                return false;
            }
        },

        // Handle card movement while dragging
        onPanResponderMove: (_, { dx, dy, y0 }) => {
            swipe.setValue({ x: dx, y: 0 });
            // titlSign.setValue(y0 > (height * 0.9) / 2 ? 1 : -1)
        },

        onPanResponderStart: (event, gestureState) => {
            // Check the value of the `dx` property
            if (Math.abs(gestureState.dx) > 3) {
                // Start the animation
                Animated.timing(swipe, {
                    toValue: {
                        x: gestureState.dx * 500,
                        y: 0
                    },
                    duration: 100,
                    useNativeDriver: true
                }).start();
            }
        },

        // Handle card release after dragging
        onPanResponderRelease: (_, { dx, dy }) => {
            const direction = Math.sign(dx);
            const isActionActive = Math.abs(dx) > 100;

            if (isActionActive) {
                // Swipe the card off the screen
                Animated.timing(swipe, {
                    duration: 100,
                    toValue: {
                        x: direction * 500,
                        y: dy
                    },
                    useNativeDriver: true
                }).start(removeTopCard);

            } else {
                // Return the card to its original position
                Animated.spring(swipe, {
                    toValue: {
                        x: 0,
                        y: 0
                    },
                    useNativeDriver: true,
                    friction: 5
                }).start()
            }
        }
    })

    // remove the top card from the users array
    const removeTopCard = useCallback(() => {
        setUsers((prevState) => prevState.slice(1));
        swipe.setValue({ x: 0, y: 0 });
    }, [swipe]);

    // handle user choice (left or right swipe)
    const handleChoice = useCallback((direction) => {
        Animated.timing(swipe.x, {
            toValue: direction * 500,
            duration: 400,
            useNativeDriver: true
        }).start(removeTopCard);

    }, [removeTopCard, swipe.x]);

    // Load fonts
    let [fontsLoaded] = useFonts({
        'Italiana': require('../assets/fonts/Italiana.ttf'),
    });

    if (!fontsLoaded) {
        return <Loader />;
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>

            <View style={{ flex: 1, backgroundColor: "#DCADAD", alignItems: "center", }}>
                <StatusBar backgroundColor="#DCADAD" barStyle="dark-content" />

                {/* Header */}
                <View style={{ marginVertical: 10, flexDirection: 'row', alignItems: 'center', width: '100%', justifyContent: 'center' }}>
                    <Text
                        style={{ fontFamily: 'Italiana', color: '#000', fontSize: 30 }}>
                        Aroma
                    </Text>
                    <TouchableOpacity style={{ position: 'absolute', right: 20, alignItems: 'center', justifyContent: 'center' }}
                    onPress={toggleModal}>
                        <View style={{ width: 40, height: 40, borderRadius: 50, backgroundColor: '#A47879', position: 'absolute', right: -5 }}></View>
                        <Filter size={30} color="#ECECEC" />
                    </TouchableOpacity>
                </View>

                {!users.length ? (
                    <LastCard />
                ) : (
                    // Map users array to render cards
                    users.map(({ name, image, location, distance, age }, index) => {
                        const isFirst = index == 0;
                        const dragHandlers = isFirst ? panResponder.panHandlers : {};

                        return (
                            <Card
                                key={name}
                                name={name}
                                location={location}
                                distance={distance}
                                age={age}
                                image={image}
                                isFirst={isFirst}
                                swipe={swipe}
                                titlSign={titlSign}
                                {...dragHandlers}
                            />
                        )
                    }).reverse()
                )}
                <Matched isVisible={isModalVisible} closeModal={toggleModal} />
            </View>
        </SafeAreaView>
    );
}
