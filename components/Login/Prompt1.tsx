import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, ScrollView, TextInput, Platform } from 'react-native';
import { ChevronRightIcon, MinusIcon } from "react-native-heroicons/outline";
import { XCircleIcon } from 'react-native-heroicons/solid';
import Modal from 'react-native-modal';
import { useRecoilState } from 'recoil';
import { userState } from '../../utils/Store';

export type ModalScreenProps = {
    isVisible: boolean
    closeModal: () => void
    selectedPrompt: 'prompt1' | 'prompt2' | 'prompt3';
}

const Prompt1 = (props: ModalScreenProps) => {
    const [user, setUser] = useRecoilState(userState);
    // const { prompt1 } = user;
    // const { question, answer } = prompt1;
    const { question, answer } = user[props.selectedPrompt];
    const [showAnswer, setShowAnswer] = useState(false);


    const updateQuestion = (newQuestion: string) => {
        setUser((prevUser) => ({
          ...prevUser,
          [props.selectedPrompt]: {
            ...prevUser[props.selectedPrompt],
            question: newQuestion,
          },
        }));
      };
      
      const updateAnswer = (newAnswer: string) => {
        setUser((prevUser) => ({
          ...prevUser,
          [props.selectedPrompt]: {
            ...prevUser[props.selectedPrompt],
            answer: newAnswer,
          },
        }));
      };
      

    const promptQuestions = [
        "If my life was a song, it would be",
        "My type of person is...",
        "My zombie apocalypse survival kit includes",
        "A dealbreaker for me is",
        "My favourite thing about Manipal is...",
        "My least favourite thing about Manipal is...",
        "I can't resist someone who",
        "Best chai/maggi here is...",
        "My last employment strategy is",
        "The first item on my bucket list is...",
        "The key to a successful relationship is",
        "My most useless skill is",
        "Something I learnt way later than I should have",
        "My relationship goals are",
        "Swipe right if...",
        "The quickest way to my heart is...",
        "My love language is",
        "My BFF's reaasons for why you should date me",
        "My red flags are",
        "My green flags are",
        "The world would be a better place with more...",
        "I always freak out about...",
        "Me: I'm a grown up. Also me:",
        "Perks of dating me:",
        "Why I came to Manipal is...",
        "A random fact I love is",
        "My favourite pick-up line",
        "My most controversial opinion is",
        "I'm known for...",
        "If I had 20 minutes left to live, I would",
    ];

    return (
        <Modal
            // animationType="slide"
            // //   transparent={true}
            // visible={props.isVisible}
            // onRequestClose={props.closeModal}
            // presentationStyle='pageSheet'
            // style={{ justifyContent: 'flex-end', overflow: 'hidden', height: '90%', width: '100%', marginTop: 20 }}



            isVisible={props.isVisible}
            style={{ margin: 0, height: '90%', overflow: 'hidden', marginTop: 40, borderRadius: 30, borderBottomLeftRadius: 0, borderBottomRightRadius: 0 }}
            onBackdropPress={props.closeModal}
            onBackButtonPress={props.closeModal}
            hideModalContentWhileAnimating={true}
            animationInTiming={400}
            animationOutTiming={200}
            useNativeDriver={true}
        >
            <XCircleIcon size={50} style={{ position: 'absolute', top: 20, right: 10, zIndex: 100, }} color={'#8FCDBB'} onPress={props.closeModal} />

            {showAnswer && (
                <View style={{ position: 'absolute', top: 30, zIndex: 100, height: 100, width: '90%', padding: 10, alignSelf: 'center', }}>
                    <Text style={{ fontFamily: 'Poppins_600SemiBold', fontSize: 16, color: 'black', textAlign: 'center', backgroundColor: '#FF6F91', padding: 10, marginBottom: 10, elevation: 10, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.8, shadowRadius: 2 }}>{question}</Text>
                    <TextInput
                        value={answer}
                        style={{ height: 100, width: '100%', zIndex: 30, alignSelf: 'center', fontFamily: 'Poppins_600SemiBold', fontSize: 14, color: 'black', textAlignVertical: 'top', padding: 10, paddingBottom: 10, borderWidth: 2, borderColor: '#FF6F91', borderRadius: 20, backgroundColor: 'white', elevation: 10, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.8, shadowRadius: 2 }}
                        numberOfLines={3}
                        multiline={true}
                        onChangeText={(newAnswer) => updateAnswer(newAnswer)}
                        placeholder={'Answer'}
                        placeholderTextColor={'#bababa'}
                        autoFocus={true}
                    />
                    <View style={{flexDirection:'row',alignItems:'center',}}>
                    <TouchableOpacity style={{ backgroundColor: '#FFC75F', paddingHorizontal: 50, paddingVertical: 10, borderRadius: 20, marginTop: 10, alignSelf: 'center', marginHorizontal: 10 }} onPress={() => {
                        setShowAnswer(false);
                        updateQuestion('');
                        updateAnswer('');
                    }}><Text style={{ fontFamily: 'Poppins_600SemiBold', fontSize: 14, color: 'white', elevation: 10, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.8, shadowRadius: 2 }}>Cancel</Text></TouchableOpacity>

                    <TouchableOpacity disabled={answer.length === 0} style={{ backgroundColor: '#63B248', paddingHorizontal: 50, paddingVertical: 10, borderRadius: 20, marginTop: 10, alignSelf: 'center', marginHorizontal: 10, opacity: answer.length === 0 ? 0.7 : 1 }} onPress={() => {
                        props.closeModal();
                        setShowAnswer(false);
                    }}><Text style={{ fontFamily: 'Poppins_600SemiBold', fontSize: 14, color: 'white', elevation: 10, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.8, shadowRadius: 2 }}>Done</Text></TouchableOpacity>


                    </View>
                </View>
            )}


            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ backgroundColor: 'white', padding: 16, height: '100%', justifyContent: 'center', alignItems: 'center', borderTopEndRadius: 30, borderTopStartRadius: 30 }}>

                    <TouchableOpacity style={{ backgroundColor: '#FFC75F', paddingHorizontal: 70, paddingVertical: 10, borderRadius: 20, marginVertical: 10, alignSelf: 'center', }} onPress={() => {
                        updateAnswer('');
                        updateQuestion('');
                        props.closeModal();
                    }}><Text style={{ fontFamily: 'Poppins_600SemiBold', fontSize: 14, color: 'white', }}>Reset</Text></TouchableOpacity>

                    {promptQuestions.map((question, index) => (
                        <TouchableOpacity key={index} activeOpacity={0.4}
                            onPress={() => {
                                updateQuestion(question);
                                updateAnswer('');
                                setShowAnswer(true);
                            }} style={{ padding: 10, alignSelf: 'flex-start', borderWidth: 0, borderRadius: 10, borderColor: '#bababa', margin: 5, width: '100%', overflow: 'hidden', flexDirection: 'row', alignItems: 'center', paddingVertical: 15, backgroundColor: '#dcadca', marginVertical:10 }}>
                            <Text key={index} style={{ color: '#fff', fontSize: 16, fontFamily: 'Poppins_600SemiBold', width: '90%', textAlign: 'left' }}>{question}</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center',  flex:1, justifyContent: 'space-around'}}>
                            <Text style={{color:'#E2E2E2',fontSize:22, fontFamily:'Poppins_200ExtraLight', marginTop: Platform.OS === 'ios' ? 0 : 5}}>|</Text>
                            <ChevronRightIcon size={20} color={'white'} style={{}} />
                            </View>
                        </TouchableOpacity>
                    ))}

                    <TouchableOpacity onPress={props.closeModal} style={{ padding: 10, paddingHorizontal: 30, backgroundColor: '#8FCDBB', borderRadius: 10, marginTop: 10 }}>
                        <Text style={{ color: 'white', fontSize: 16, fontFamily: 'Poppins_600SemiBold', textAlign: 'center' }}>Close</Text>
                    </TouchableOpacity>


                </View>
            </ScrollView>
        </Modal>
    )
}

export default Prompt1