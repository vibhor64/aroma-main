import { View, Text, Image, StyleSheet, Dimensions, Animated, ScrollView, PanResponder, Platform } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
const { width, height } = Dimensions.get("screen");
import { Fragment, useCallback } from "react";
import Choice from "./Choice";
import { Fonts } from '../../fonts';

const Card = ({ profileData, isFirst, swipe, titlSign, ...rest }) => {
    // console.log(profileData);

    const { name, age, bio, location, image, personalityTraits, Interests, img2, img3, img4, img5, img6 } = profileData

    // const zodiacSign = {
    //     "Aries": "♈",
    //     "Taurus": "♉",
    //     "Gemini": "♊",
    //     "Cancer": "♋",
    //     "Leo": "♌",
    //     "Virgo": "♍",
    //     "Libra": "♎",
    //     "Scorpio": "♏",
    //     "Sagittarius": "♐",
    //     "Capricorn": "♑",
    //     "Aquarius": "♒",
    //     "Pisces": "♓"
    //   }

    // const personalityTraits = [
    //     gender,
    //     '🌏 Punjabi',
    //     '💪 Yes',
    //     '👫 Long-term (Open to short-term)',
    //     '☁️ Straight',
    //     '🛐 Hindu',
    //     '🚬 No',
    //     '🍾 Yes',
    //     '💊 No',
    //     `${zodiacSign[zodiac]} ${zodiac}`,
    //     '🗣️ Hindi, English, Japanese',
    // ];

    // const Interests = [
    //     'Cooking 🍳',
    //     'Bathing 🚿',
    //     'Chatting 🗣️',
    //     'Winning 🥇',
    //     'Dancing 💃',
    //     'Reading 📖',
    //     'Traveling ✈️',
    // ];



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

                <View style={{zIndex: -1, position: 'absolute', width: width * 0.9, height: height * 0.6, borderRadius: 0,}}>

                <View style={{ width: width * 0.9, height: height * 0.6, borderRadius: 0, }}>
                    <Image source={image} style={styles.image} resizeMode="cover" />
                </View>

                </View>
                {/* Profile Main Details */}


            <ScrollView style={{ width: width * 0.9, height: height * 0.78, borderRadius: 0, }} showsVerticalScrollIndicator={false}
                alwaysBounceVertical={false}>
                
                <View style={{ height: 500}}></View>
                <View style={styles.userContainer}>
                    <Text style={{ fontSize: 26, color: "#FFFFFF", fontFamily: "Poppins_800ExtraBold" }}>{name}, {age} </Text>
                    <Text style={{ fontSize: 13, color: "#BCBCBC", fontFamily: "Poppins_600SemiBold", maxWidth: '95%' }} numberOfLines={1} >
                        IT, {location}, 168 cm, Delhi
                    </Text>
                </View>

                <View style={{backgroundColor: '#dadada'}}>
                {/* Main Frame */}
                <View style={styles.mainFrame}>
                    <View style={{ margin: 20 }}>
                        <Text style={{ fontSize: 12, color: "#E23DA0", fontFamily: "Poppins_700Bold" }}>About</Text>
                        <Text style={{ fontSize: 11, color: "#A0A0A0", fontFamily: "Poppins_600SemiBold" }}>
                            {bio}</Text>
                        <Text style={{ fontSize: 12, color: "#E23DA0", fontFamily: "Poppins_700Bold", marginTop: 10 }}>Preferences</Text>
                        <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginLeft: -10 }}>
                            {personalityTraits.map((item, index) => (
                                <View key={index} style={{ backgroundColor: '#D9D9D9', paddingHorizontal: 10, paddingVertical: 5, borderRadius: 20, margin: 5 }}>
                                    <Text style={{ fontSize: 10, color: "#000", fontFamily: "Poppins_600SemiBold" }}>{item}</Text>
                                </View>
                            ))}
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
                    <Text style={{ fontSize: 12, color: "#E23DA0", fontFamily: "Poppins_700Bold", marginHorizontal: 20 }}>Interests</Text>
                    <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginHorizontal: 10, marginBottom: 20 }}>
                        {Interests.map((item, index) => (
                            <View key={index} style={{ backgroundColor: '#fff', paddingHorizontal: 10, paddingVertical: 5, borderRadius: 20, margin: 5 }}>
                                <Text style={{ fontSize: 10, color: "#000", fontFamily: "Poppins_600SemiBold" }}> {item}</Text>
                            </View>
                        ))}
                    </View>
                </>

                {/* Image 2 */}
                {img2 && (
                    <Image source={img2}
                        style={{ height: 400, width: width * 0.9, borderRadius: 20, marginBottom: 20 }}
                    />
                )}

                {/* Prompt 1 */}
                <View style={[styles.promptFrame, { marginTop: img2 ? 0 : 20 }]}>
                    <View style={{ margin: 20,}}>
                        <Text style={{ fontFamily: 'Poppins_700Bold', fontSize: 16 }}>After work you can find me at</Text>
                        <Text style={{ fontFamily: 'Poppins_600SemiBold', fontSize: 12, color: '#A0A0A0' }}>Insert controversial opinion that no one actually even cares  about</Text>
                    </View>
                </View>

                {/* Image 3 */}
                {img3 && (
                    <Image source={img3}
                        style={{ height: 400, width: width * 0.9, borderRadius: 20, marginBottom: 20 }}
                    />
                )}

                {/* Image 4 */}
                {img4 && (
                    <Image source={img4}
                        style={{ height: 400, width: width * 0.9, borderRadius: 20, marginBottom: 20 }}
                    />
                )}

                {/* Prompt 2 */}
                <View style={styles.promptFrame}>
                    <View style={{ margin: 20 }}>
                        <Text style={{ fontFamily: 'Poppins_700Bold', fontSize: 16 }}>After work you can find me at</Text>
                        <Text style={{ fontFamily: 'Poppins_600SemiBold', fontSize: 12, color: '#A0A0A0' }}>Insert controversial opinion that no one actually even cares  about</Text>
                    </View>
                </View>

                {/* Image 5 */}
                {img5 && (
                    <Image source={img5}
                        style={{ height: 400, width: width * 0.9, borderRadius: 20, marginBottom: 20 }}
                    />
                )}

                {/* Prompt 3 */}
                <View style={styles.promptFrame}>
                    <View style={{ margin: 20 }}>
                        <Text style={{ fontFamily: 'Poppins_700Bold', fontSize: 16 }}>After work you can find me at</Text>
                        <Text style={{ fontFamily: 'Poppins_600SemiBold', fontSize: 12, color: '#A0A0A0' }}>Insert controversial opinion that no one actually even cares  about</Text>
                    </View>
                </View>

                {/* Image 6 */}

                {img6 && (
                    <Image source={img6}
                        style={{ height: 400, width: width * 0.9, borderRadius: 20, marginBottom:0 }}
                    />
                )}

                {/* Favourite Artists */}
                {/* <View>
                    <Text style={{ fontFamily: 'Poppins_700Bold', fontSize: 16, marginHorizontal: 20, color: '#E23DA0', marginTop: 20 }}>Favourite Artists</Text>
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
                </View> */}

                {/* Dummy view for additional bottom space */}
                {/* <View style={{ height: 10, width: width * 0.9, }}></View> */}


                {isFirst && renderChoice()}
                </View>
            </ScrollView>

        </Animated.View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        top: 70,
        borderRadius: 20,
        overflow: 'hidden',        
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
        top: -25,
        zIndex: 10,
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.17,
        shadowRadius: 3.05,
        elevation: 4,
        marginBottom: 20
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
        transform: [{ rotate: '-30deg' }],
        top: -200,
        zIndex: 100
    },
    nopeContainer: {
        right: 45,
        transform: [{ rotate: '30deg' }],
        top: -200,
        zIndex: 100
    },
})

export default Card