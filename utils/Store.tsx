import React from 'react';
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';

export const isSignedIn = atom({
    key: '0', // unique ID (with respect to other atoms/selectors)
    default: true, // default value (aka initial value)
  });

export const userState = atom({
  key: 'userState',
  default: {
    image: '',
    name: '',
    showNameOnProfile: true,
    gender: '',
    dob: '',
    age: '',
    img2: '',
    img3: '',
    img4: '',
    img5: '',
    img6: '',
    traits: [{
      branch: '',
      hometown: '',
      religion: '',
      exercise: '',
      sorientation: '',
      height: '',
      ethnicity: '',
      drink: '',
      smoke: '',
      zodiac: '',
      relationshipType: '',
      languages: '',
    }],
    bio: '', 
    interests: [],
    prompt1: {question: '', answer: ''},
    prompt2: {question: '', answer: ''},
    prompt3: {question: '', answer: ''},
    outlook: '',
  },
});