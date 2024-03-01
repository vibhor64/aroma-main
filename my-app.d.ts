import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type HomeStackNavigatorParamList = {
  Welcome: undefined;
  Login: undefined;
  OtpScreen: undefined;
  NameScreen: undefined;
  Images: undefined;
  Traits: undefined;
  Interests: undefined;
  Prompts: undefined;
  Outlook: undefined;
  Home: undefined;
  Profile: undefined;
  Main: undefined;
  Like: undefined;
  Chat: undefined;
  Premium: undefined;
  Chatting: undefined;
  EditProfile: undefined;
  Preferences: undefined;
  EditInterests: undefined;
};

export type HomeScreenNavigationProp = NativeStackScreenProps<
  HomeStackNavigatorParamList,
  'Home' | 'Chat'
>;