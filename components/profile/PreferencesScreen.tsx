import { View, Text, TextInput, ScrollView, TouchableOpacity, Image, ImageBackground, Platform } from 'react-native'
import React, { useState } from 'react'
import { useRecoilState } from 'recoil';
import { userState } from '../../utils/Store';
import { useNavigation } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';

const Preferences = () => {
  const navigation = useNavigation();
  const [selectedLanguage, setSelectedLanguage] = useState();
  const [user, setUser] = useRecoilState(userState);
  const { traits } = user;
  const { branch, hometown, religion, exercise, sorientation, height, ethnicity, drink, smoke, zodiac, relationshipType, languages } = traits;

  const updateBranch = (newBranch: any) => {
    setUser((prevUser) => ({
      ...prevUser,
      traits: {
        ...prevUser.traits,
        branch: newBranch,
      },
    }));
  };
  const updateHometown = (newHometown: any) => {
    setUser((prevUser) => ({
      ...prevUser,
      traits: {
        ...prevUser.traits,
        hometown: newHometown
      }
    }));
  }

  const updateReligion = (newReligion: any) => {
    setUser((prevUser) => ({
      ...prevUser,
      traits: {
        ...prevUser.traits,
        religion: newReligion
      }
    }));
  }

  const updateExercise = (newExercise: any) => {
    setUser((prevUser) => ({
      ...prevUser,
      traits: {
        ...prevUser.traits,
        exercise: newExercise
      }
    }));
  }
  const updateSexualOrientation = (newOrientation: any) => {
    setUser((prevUser) => ({
      ...prevUser,
      traits: {
        ...prevUser.traits,
        sorientation: newOrientation
      }
    }));
  }

  const updateHeight = (newHeight: any) => {
    setUser((prevUser) => ({
      ...prevUser,
      traits: {
        ...prevUser.traits,
        height: newHeight
      }
    }));
  }

  const updateEthnicity = (newEthnicity: any) => {
    setUser((prevUser) => ({
      ...prevUser,
      traits: {
        ...prevUser.traits,
        ethnicity: newEthnicity
      }
    }));
  }

  const updateDrink = (newDrink: any) => {
    setUser((prevUser) => ({
      ...prevUser,
      traits: {
        ...prevUser.traits,
        drink: newDrink
      }
    }));
  }

  const updateSmoke = (newSmoke: any) => {
    setUser((prevUser) => ({
      ...prevUser,
      traits: {
        ...prevUser.traits,
        smoke: newSmoke
      }
    }));
  }

  const updateZodiac = (newZodiac: any) => {
    setUser((prevUser) => ({
      ...prevUser,
      traits: {
        ...prevUser.traits,
        zodiac: newZodiac
      }
    }));
  }

  const updateRelationshipType = (newType: any) => {
    setUser((prevUser) => ({
      ...prevUser,
      traits: {
        ...prevUser.traits,
        relationshipType: newType
      }
    }));
  }
  const updateLanguages = (newLanguages: any) => {
    setUser((prevUser) => ({
      ...prevUser,
      traits: {
        ...prevUser.traits,
        languages: newLanguages
      }
    }));
  }

  const heightOptions = [
    "130 cm or less",
    "130-140",
    "141 cm",
    "142 cm",
    "143 cm",
    "144 cm",
    "145 cm",
    "146 cm",
    "147 cm",
    "148 cm",
    "149 cm",
    "150 cm",
    "151 cm",
    "152 cm",
    "153 cm",
    "154 cm",
    "155 cm",
    "156 cm",
    "157 cm",
    "158 cm",
    "159 cm",
    "160 cm",
    "161 cm",
    "162 cm",
    "163 cm",
    "164 cm",
    "165 cm",
    "166 cm",
    "167 cm",
    "168 cm",
    "169 cm",
    "170 cm",
    "171 cm",
    "172 cm",
    "173 cm",
    "174 cm",
    "175 cm",
    "176 cm",
    "177 cm",
    "178 cm",
    "179 cm",
    "180 cm",
    "181 cm",
    "182 cm",
    "183 cm",
    "184 cm",
    "185 cm",
    "186 cm",
    "187 cm",
    "188 cm",
    "189 cm",
    "190 cm",
    "191 cm",
    "192 cm",
    "193 cm",
    "194 cm",
    "195 cm",
    "196 cm",
    "197 cm",
    "198 cm",
    "199 cm",
    "200 cm",
    "Over 200 cm"
  ];

  const zodiacOptions = [
    '',
    'Aries',
    'Taurus',
    'Gemini',
    'Cancer',
    'Leo',
    'Virgo',
    'Libra',
    'Scorpio',
    'Sagittarius',
    'Capricorn',
    'Aquarius',
    'Pisces'
  ]

  return (
    <ScrollView >
      <View style={{ padding: 20, paddingTop: 30, backgroundColor: '#fff', }}>
      <Image source={require('../../assets/icons/login page/s2.jpg')} style={{width: 35, height: 35,marginLeft: 4}} /> 
      <Image source={require('../../assets/icons/login page/h3.jpg')} style={{width: 45, height: 45,position: 'absolute', right: -5, top: 310}} /> 
      <Image source={require('../../assets/icons/login page/s3.jpg')} style={{width: 25, height: 25,position: 'absolute', left: 4, bottom: Platform.OS == 'android' ? 210 : 450}} /> 
      <Text style={{ fontSize: 32, fontFamily: 'Poppins_700Bold', color: '#E23DA0' }}>Edit Preferences</Text>
      <Text style={{ fontSize: 12, fontFamily: 'Poppins_600SemiBold', color: '#000' }}>This might help us find the right match for you!</Text>


      <TextInput

          style={{ height: 40, marginHorizontal: 20, paddingHorizontal: 10, borderRadius: 0, marginTop: 25, width: '90%', fontFamily: 'Poppins_600SemiBold', color: '#000', borderBottomWidth: 1, borderColor: '#E23DA0', borderLeftWidth: 1 }}
          value={traits.branch}
          onSubmitEditing={(event) => updateBranch(event.nativeEvent.text)}
          onChangeText={(text) => updateBranch(text)}
          placeholder="Branch"
          placeholderTextColor="gray"
          maxLength={28}
        />

        {/* <Text style={{ fontFamily: 'Poppins_600SemiBold', color: '#E23DA0', marginTop: 20, textAlign: 'center' }}>Hometown</Text> */}
        <TextInput

          style={{ height: 40, marginHorizontal: 20, paddingHorizontal: 10, borderRadius: 0, marginTop: 25, width: '90%', fontFamily: 'Poppins_600SemiBold', color: '#000', borderBottomWidth: 1, borderColor: '#E23DA0', borderRightWidth: 1 }}
          value={traits.hometown}
          onSubmitEditing={(event) => updateHometown(event.nativeEvent.text)}
          onChangeText={(text) => updateHometown(text)}
          placeholder="Hometown"
          placeholderTextColor="gray"
          maxLength={28}
        />

        {/* <Text style={{ fontFamily: 'Poppins_600SemiBold', color: '#E23DA0', marginTop: 20, textAlign: 'center' }}>Religion</Text> */}
        <TextInput
          style={{ height: 40, marginHorizontal: 20, paddingHorizontal: 10, borderRadius: 0, marginTop: 25, width: '90%', fontFamily: 'Poppins_600SemiBold', color: '#000', borderBottomWidth: 1, borderColor: '#E23DA0', borderLeftWidth: 1 }}
          value={traits.religion}
          onSubmitEditing={(event) => updateReligion(event.nativeEvent.text)}
          onChangeText={(text) => updateReligion(text)}
          placeholder="Religion"
          placeholderTextColor="gray"
          maxLength={28}
        />

        {/* <Text style={{ fontFamily: 'Poppins_600SemiBold', color: '#E23DA0', marginTop: 20, textAlign: 'center' }}>Ethnicity</Text> */}
        <TextInput

          style={{ height: 40, marginHorizontal: 20, paddingHorizontal: 10, borderRadius: 0, marginTop: 25, width: '90%', fontFamily: 'Poppins_600SemiBold', color: '#000', borderTopWidth: 1, borderColor: '#E23DA0', borderRightWidth: 1 }}
          value={traits.ethnicity}
          onSubmitEditing={(event) => updateEthnicity(event.nativeEvent.text)}
          onChangeText={(text) => updateEthnicity(text)}
          placeholder="Ethnicity"
          placeholderTextColor="gray"
          maxLength={28}
        />

        <TextInput

          style={{ height: 40, marginHorizontal: 20, paddingHorizontal: 10, borderRadius: 0, marginTop: 25, width: '90%', fontFamily: 'Poppins_600SemiBold', color: '#000', borderBottomWidth: 1, borderColor: '#E23DA0', borderLeftWidth: 1 }}
          value={traits.languages}
          onSubmitEditing={(event) => updateLanguages(event.nativeEvent.text)}
          onChangeText={(text) => updateLanguages(text)}
          placeholder="Languages"
          placeholderTextColor="gray"
          maxLength={28}
        />

      <Text style={{ fontFamily: 'Poppins_600SemiBold', color: '#E23DA0', marginTop: 20, textAlign: 'center' }}>Exercise</Text>
      <Picker
        selectedValue={exercise}
        style={{backgroundColor: '#E8E8E8', borderRadius: 20, marginTop: 10}}
        onValueChange={(itemValue, itemIndex) => {
          updateExercise(itemValue);
        }
        }>
        <Picker.Item label="" value="" color="#999" />
        <Picker.Item label="Always" value="Always" color="#999" />
        <Picker.Item label="Occasionally" value="Occasionally" color="#999" />
        <Picker.Item label="Never" value="Never" color="#999" />
      </Picker>


      <Text style={{ fontFamily: 'Poppins_600SemiBold', color: '#E23DA0', marginTop: 20, textAlign: 'center' }}>Sexual Orientation</Text>
      <Picker
      style={{backgroundColor: '#E8E8E8', borderRadius: 20, marginTop: 10}}
        selectedValue={sorientation}
        onValueChange={(itemValue, itemIndex) => {
          updateSexualOrientation(itemValue);
        }
        }>
        <Picker.Item label="N/A" value="N/A" color="#999" />
        <Picker.Item label="Straight" value="Straight" color="#999" />
        <Picker.Item label="Bisexual" value="Bisexual" color="#999" />
        <Picker.Item label="Gay" value="Gay" color="#999" />
        <Picker.Item label="Lesbian" value="Lesbian" color="#999" />
        <Picker.Item label="LGBTQ+" value="LGBTQ+" color="#999" />
        <Picker.Item label="Pansexual" value="Pansexual" color="#999" />
        <Picker.Item label="Asexual" value="Asexual" color="#999" />
      </Picker>

      <Text style={{ fontFamily: 'Poppins_600SemiBold', color: '#E23DA0', marginTop: 20, textAlign: 'center' }}>Height</Text>
      <Picker
      style={{backgroundColor: '#E8E8E8', borderRadius: 20, marginTop: 10}}
        selectedValue={height}
        onValueChange={(itemValue, itemIndex) => {
          updateHeight(itemValue);
        }
        }>
        {heightOptions.map((option, index) => (
          <Picker.Item key={index} label={option} value={option} color="#999" />
        ))}
      </Picker>



      <Text style={{ fontFamily: 'Poppins_600SemiBold', color: '#E23DA0', marginTop: 20, textAlign: 'center' }}>Drink</Text>
      <Picker
      style={{backgroundColor: '#E8E8E8', borderRadius: 20, marginTop: 10}}
        selectedValue={drink}
        onValueChange={(itemValue, itemIndex) => {
          updateDrink(itemValue);
        }
        }>
        <Picker.Item label="Frequently" value="Frequently" color="#999" />
        <Picker.Item label="Occasionally" value="Occasionally" color="#999" />
        <Picker.Item label="Never" value="Never" color="#999" />
      </Picker>

      <Text style={{ fontFamily: 'Poppins_600SemiBold', color: '#E23DA0', marginTop: 20, textAlign: 'center' }}>Smoke</Text>
      <Picker
      style={{backgroundColor: '#E8E8E8', borderRadius: 20, marginTop: 10}}
        selectedValue={smoke}
        onValueChange={(itemValue, itemIndex) => {
          updateSmoke(itemValue);
        }
        }>
        <Picker.Item label="Frequently" value="Frequently" color="#999" />
        <Picker.Item label="Occasionally" value="Occasionally" color="#999" />
        <Picker.Item label="Never" value="Never" color="#999" />
      </Picker>

      <Text style={{ fontFamily: 'Poppins_600SemiBold', color: '#E23DA0', marginTop: 20, textAlign: 'center' }}>Zodiac</Text>
      <Picker
      style={{backgroundColor: '#E8E8E8', borderRadius: 20, marginTop: 10}}
        selectedValue={zodiac}
        onValueChange={(itemValue, itemIndex) => {
          updateZodiac(itemValue);
        }
        }>
        {zodiacOptions.map((option, index) => (
          <Picker.Item key={index} label={option} value={option} color="#999" />
        ))}
      </Picker>

      <Text style={{ fontFamily: 'Poppins_600SemiBold', color: '#E23DA0', marginTop: 20, textAlign: 'center' }}>Looking for</Text>
      <Picker
      style={{backgroundColor: '#E8E8E8', borderRadius: 20, marginTop: 10}}
        selectedValue={relationshipType}
        onValueChange={(itemValue, itemIndex) => {
          updateRelationshipType(itemValue);
        }
        }>
        <Picker.Item label="Don't know yet" value="Don't know yet" color="#999" />
        <Picker.Item label="Short-term" value="Short-term" color="#999" />
        <Picker.Item label="Long-term" value="Long-term" color="#999" />
        <Picker.Item label="Short-term, open to long-term" value="Short-term, open to long-term" color="#999" />
        <Picker.Item label="Long-term, open to short-term" value="Long-term, open to short-term" color="#999" />
      </Picker>


      <TouchableOpacity activeOpacity={0.4} style={{marginTop: 50, alignSelf: 'center', width: '90%' }} onPress={() => { navigation.goBack() }}>
        <Text style={{ paddingHorizontal: 20, paddingVertical: 10, fontSize: 12, fontFamily: 'Poppins_800ExtraBold', color: '#fff', backgroundColor: '#0089BA', borderRadius: Platform.OS == 'android'? 30:20, overflow: 'hidden', textAlign: 'center', }}>Done</Text>
      </TouchableOpacity>

      {/* Filler space */}
      <View style={{ flex: 1, height: 30 }}></View>

      </View>
    </ScrollView>
  )
}

export default Preferences