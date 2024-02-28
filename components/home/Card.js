import { View, Text, Image, StyleSheet, Dimensions, Animated, ScrollView, PanResponder, Platform } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
const { width, height } = Dimensions.get("screen");
import { Fragment, useCallback } from "react";
import Choice from "./Choice";
import { Fonts } from '../../fonts';

const Card = ({ name, age, location, distance, image, isFirst, swipe, titlSign, ...rest }) => {

    const personalityTraits = [
        'Woman',
        'Straight',
        '💪 Yes',
        '🛐 Hindu',
        '👫 Long-term (Open to short-term)',
        '🚬 No',
        '☕ Yes',
        '🍾 Yes',
        '💊 No',
        'Taurus',
        '🗣️ Hindi, English, Japanese',
    ];


    // Calculate the rotation of the card based on swipe gesture
    const rotate = Animated.multiply(swipe.x, titlSign).interpolate({
        inputRange: [-100, 0, 100],
        outputRange: ['-8deg', '0deg', '8deg']
    });

    // Animated style for the card with rotation and translation
    const animatedCardStyle = {
        transform: [...swipe.getTranslateTransform(), { rotate },]
    }

    // Opacity animation for the "like" button
    const likeOpacity = swipe.x.interpolate({
        inputRange: [25, 100],
        outputRange: [0, 1],
        extrapolate: 'clamp'
    });

    // Opacity animation for the "nope" button
    const nopeOpacity = swipe.x.interpolate({
        inputRange: [-100, -25],
        outputRange: [1, 0],
        extrapolate: 'clamp'
    });




    // Function to render the "like" and "nope" buttons conditionally
    const renderChoice = useCallback(() => {
        return (
            <Fragment>
                <Animated.View
                    style={[
                        styles.choiceContainer,
                        styles.likeContainer,
                        { opacity: likeOpacity }
                    ]}>
                    <Choice type="like" />
                </Animated.View>
                <Animated.View
                    style={[
                        styles.choiceContainer,
                        styles.nopeContainer,
                        { opacity: nopeOpacity }
                    ]}>
                    <Choice type="nope" />
                </Animated.View>
            </Fragment>
        )
    }, [likeOpacity, nopeOpacity])

    // Load fonts
    const [fontsLoaded] = Fonts();
    if (!fontsLoaded) {
        return null;
    }

    return (
        <Animated.View
            style={[styles.container, isFirst && animatedCardStyle]} {...rest}>

            <ScrollView style={{ width: width * 0.9, height: height * 0.78, borderRadius: 0 }} showsVerticalScrollIndicator={false}
                alwaysBounceVertical={false}>
                <View style={{ width: width * 0.9, height: height * 0.6, borderRadius: 0, }}>
                    <Image source={image} style={styles.image} resizeMode="cover" />
                </View>

                {/* Profile Main Details */}
                <View style={styles.userContainer}>
                    <Text style={{ fontSize: 26, color: "#FFFFFF", fontFamily: "Poppins_800ExtraBold" }}>{name}, {age} </Text>
                    <Text style={{ fontSize: 13, color: "#BCBCBC", fontFamily: "Poppins_600SemiBold" }}>
                        IT, {location}, 5'9, Punjabi
                    </Text>
                </View>

                {/* Main Frame */}
                <View style={styles.mainFrame}>
                    <View style={{ margin: 20 }}>
                        <Text style={{ fontSize: 12, color: "#E23DA0", fontFamily: "Poppins_700Bold" }}>About</Text>
                        <Text style={{ fontSize: 11, color: "#A0A0A0", fontFamily: "Poppins_600SemiBold" }}>
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a moss.</Text>
                        <Text style={{ fontSize: 12, color: "#E23DA0", fontFamily: "Poppins_700Bold", marginTop: 10 }}>Interests</Text>
                        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                            <View style={{ backgroundColor: '#D9D9D9', paddingHorizontal: 10, paddingVertical: 5, borderRadius: 20, margin: 5 }}>
                                <Text style={{ fontSize: 10, color: "#000", fontFamily: "Poppins_600SemiBold" }}>Cooking 🍳</Text>
                            </View>

                            <View style={{ backgroundColor: '#D9D9D9', paddingHorizontal: 10, paddingVertical: 5, borderRadius: 20, margin: 5 }}>
                                <Text style={{ fontSize: 10, color: "#000", fontFamily: "Poppins_600SemiBold" }}>Bathing 🚿</Text>
                            </View>

                            <View style={{ backgroundColor: '#D9D9D9', paddingHorizontal: 10, paddingVertical: 5, borderRadius: 20, margin: 5 }}>
                                <Text style={{ fontSize: 10, color: "#000", fontFamily: "Poppins_600SemiBold" }}>Chatting 🗣️</Text>
                            </View>

                            <View style={{ backgroundColor: '#D9D9D9', paddingHorizontal: 10, paddingVertical: 5, borderRadius: 20, margin: 5 }}>
                                <Text style={{ fontSize: 10, color: "#000", fontFamily: "Poppins_600SemiBold" }}>Winning 🥇</Text>
                            </View>

                            <View style={{ backgroundColor: '#D9D9D9', paddingHorizontal: 10, paddingVertical: 5, borderRadius: 20, margin: 5 }}>
                                <Text style={{ fontSize: 10, color: "#000", fontFamily: "Poppins_600SemiBold" }}>Sleeping 🛌</Text>
                            </View>

                        </View>
                    </View>
                </View>

                {/* Horizontal Scrollview Details */}
                {/* {Platform.OS === 'android' && (


                    <View style={styles.quickInfo}>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} nestedScrollEnabled>
                            <Text style={{ fontSize: 14, color: "#636363", fontFamily: "Poppins_600SemiBold", paddingHorizontal: 3 }}>Woman |</Text>
                            <Text style={{ fontSize: 14, color: "#636363", fontFamily: "Poppins_600SemiBold", paddingHorizontal: 3 }}>Straight |</Text>
                            <Text style={{ fontSize: 14, color: "#636363", fontFamily: "Poppins_600SemiBold", paddingHorizontal: 3 }}>💪 Yes |</Text>
                            <Text style={{ fontSize: 14, color: "#636363", fontFamily: "Poppins_600SemiBold", paddingHorizontal: 3 }}>🛐 Hindu |</Text>
                            <Text style={{ fontSize: 14, color: "#636363", fontFamily: "Poppins_600SemiBold", paddingHorizontal: 3 }}>👫 Long-term (Open to short-term) |</Text>
                            <Text style={{ fontSize: 14, color: "#636363", fontFamily: "Poppins_600SemiBold", paddingHorizontal: 3 }}>🚬 No |</Text>
                            <Text style={{ fontSize: 14, color: "#636363", fontFamily: "Poppins_600SemiBold", paddingHorizontal: 3 }}>☕ Yes |</Text>
                            <Text style={{ fontSize: 14, color: "#636363", fontFamily: "Poppins_600SemiBold", paddingHorizontal: 3 }}>🍾 Yes |</Text>
                            <Text style={{ fontSize: 14, color: "#636363", fontFamily: "Poppins_600SemiBold", paddingHorizontal: 3 }}>💊 No |</Text>
                            <Text style={{ fontSize: 14, color: "#636363", fontFamily: "Poppins_600SemiBold", paddingHorizontal: 3 }}> Taurus |</Text>
                            <Text style={{ fontSize: 14, color: "#636363", fontFamily: "Poppins_600SemiBold", paddingHorizontal: 3 }}> 🗣️ Hindi, English, Japanese |</Text>
                        </ScrollView>
                    </View >
                )} */}

                {/* {Platform.OS === 'ios' && ( */}
                    <>
                        <Text style={{ fontSize: 12, color: "#E23DA0", fontFamily: "Poppins_700Bold", marginHorizontal: 20 }}>Preferences</Text>
                        <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginHorizontal: 10, marginBottom: 20 }}>
                            {personalityTraits.map((item, index) => (
                                <View key={index} style={{ backgroundColor: '#fff', paddingHorizontal: 10, paddingVertical: 5, borderRadius: 20, margin: 5 }}>
                                    <Text style={{ fontSize: 10, color: "#000", fontFamily: "Poppins_600SemiBold" }}> {item}</Text>
                                </View>
                            ))}
                        </View>
                    </>
                
                <Image source={{ uri: 'https://images.unsplash.com/photo-1631947430066-48c30d57b943?q=80&w=1916&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }}
                    style={{ height: 400, width: width * 0.9, borderRadius: 20, }}
                />

                {/* Prompt 1 */}
                <View style={styles.promptFrame}>
                    <View style={{ margin: 20 }}>
                        <Text style={{ fontFamily: 'Poppins_700Bold', fontSize: 16 }}>After work you can find me at</Text>
                        <Text style={{ fontFamily: 'Poppins_600SemiBold', fontSize: 12, color: '#A0A0A0' }}>Insert controversial opinion that no one actually even cares  about</Text>
                    </View>
                </View>

                {/* Favourite Artists */}
                <View>
                    <Text style={{ fontFamily: 'Poppins_700Bold', fontSize: 16, marginHorizontal: 20, color: '#E23DA0', marginTop: 20}}>Favourite Artists</Text>
                    <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginHorizontal: 10 }}>
                        <View style={{ backgroundColor: '#D9D9D9', paddingHorizontal: 10, paddingVertical: 5, borderRadius: 20, margin: 5 }}>
                            <Text style={{ fontSize: 10, color: "#000", fontFamily: "Poppins_600SemiBold" }}>The Weeknd</Text>
                        </View>

                        <View style={{ backgroundColor: '#D9D9D9', paddingHorizontal: 10, paddingVertical: 5, borderRadius: 20, margin: 5 }}>
                            <Text style={{ fontSize: 10, color: "#000", fontFamily: "Poppins_600SemiBold" }}>Pink Floyd</Text>
                        </View>

                        <View style={{ backgroundColor: '#D9D9D9', paddingHorizontal: 10, paddingVertical: 5, borderRadius: 20, margin: 5 }}>
                            <Text style={{ fontSize: 10, color: "#000", fontFamily: "Poppins_600SemiBold" }}>Bellie Elish</Text>
                        </View>

                        <View style={{ backgroundColor: '#D9D9D9', paddingHorizontal: 10, paddingVertical: 5, borderRadius: 20, margin: 5 }}>
                            <Text style={{ fontSize: 10, color: "#000", fontFamily: "Poppins_600SemiBold" }}>Glorb</Text>
                        </View>

                        <View style={{ backgroundColor: '#D9D9D9', paddingHorizontal: 10, paddingVertical: 5, borderRadius: 20, margin: 5 }}>
                            <Text style={{ fontSize: 10, color: "#000", fontFamily: "Poppins_600SemiBold" }}>Trevis Scoot</Text>
                        </View>

                    </View>
                </View>

                {/* Dummy view for additional bottom space */}
                <View style={{ height: 50, width: width * 0.9, }}></View>


                {isFirst && renderChoice()}
            </ScrollView>

        </Animated.View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        top: 70,
        borderRadius: 20,
        backgroundColor: '#ECECEC',
        // padding: 4
    },
    image: {
        width: width * 0.9,
        height: height * 0.6,
        borderRadius: 20,
        position: "absolute",
        top: 0,
        // left: 0,
        // right: 0,
        // bottom: 0
    },
    userContainer: {
        position: "absolute",
        flex: 1,
        top: 380,
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        width: width * 0.9,
        // zIndex: 10
    },
    mainFrame: {
        backgroundColor: 'white',
        borderRadius: 20,
        position: 'relative',
        top: -35,
        zIndex: 10,
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.17,
        shadowRadius: 3.05,
        elevation: 4
    },
    promptFrame: {
        backgroundColor: 'white',
        borderRadius: 20,
        position: 'relative',
        top: -5,
        zIndex: 10,
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.17,
        shadowRadius: 3.05,
        elevation: 4
    },
    quickInfo: {
        position: 'relative',
        flexDirection: 'row',
        // justifyContent: 'space-between',
        paddingHorizontal: 20,
        // paddingVertical: 10,
        marginBottom: 30,
        padding: 10,
        // paddingTop: 0,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#A0A0A0',
        backgroundColor: 'white',
        // borderRadius: 20,
    },
    choiceContainer: {
        position: 'absolute',
        top: 100
    },
    likeContainer: {
        left: 45,
        transform: [{ rotate: '-30deg' }]
    },
    nopeContainer: {
        right: 45,
        transform: [{ rotate: '30deg' }]
    },
})

export default Card