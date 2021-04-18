import React, { useEffect, useState } from 'react';
import {Text, View, AppState, Keyboard} from 'react-native';
import { InputOptionsType } from '../../../types';
import styles from './styles';
import AnimatedTextInput from '../../../components/AnimatedTextInput';
import Zocial from 'react-native-vector-icons/Zocial';
import Foundation from 'react-native-vector-icons/Foundation';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSafeAreaInsets } from 'react-native-safe-area-context';



const LoginScreen = () => {

const insets = useSafeAreaInsets();
const [email, setEmail] = useState('');
const [emailActive, setEmailActive] = useState(false);
const [password, setPassword] = useState('');
const [passwordActive, setPasswordActive] = useState(false);



const inputOptions: InputOptionsType[] = [
  {
    type: 'EMAIL',
    keyboardType: 'email-address',
    placeholder: 'Email',
    value: email,
    onChangeText: (text:string) => handleTextChange(text, 'EMAIL'),
    onPress: (type:string) => handleInputPress(type),
    active: emailActive,
    icon: <Zocial name="email" size={15}/>
  },
  {
    type: 'PASSWORD',
    placeholder: 'Password',
    isPassword: true,
    value: password,
    onChangeText: (text: string) => handleTextChange(text, 'PASSWORD'),
    onPress: (type: string) => handleInputPress(type),
    active: passwordActive,
    icon: <Foundation name="key" size={15}/>
  },
];

const handleTextChange = (value: string, type: string) => {
  switch(type){
    case 'EMAIL' : 
      setEmail(value);
      break;
    case 'PASSWORD' :
      setPassword(value);
      break;
      default: 
      break;
  }
}

const handleInputPress = (type: string) => {
  switch(type){
    case 'EMAIL' : 
    setPasswordActive(false);
      setEmailActive(true);
      break;
    case 'PASSWORD' :
      setEmailActive(false);
      setPasswordActive(true);
      break;
      default: 
      break;
  }
}


  return (
    <SafeAreaView>
    <View style={[styles.mainContainer, {
    paddingTop: insets.top,
    paddingLeft: insets.left,
    paddingBottom: insets.bottom,
    paddingRight: insets.right
    }
    ]}>
      <AnimatedTextInput options={inputOptions[0]} />
      <AnimatedTextInput options={inputOptions[1]} />
    </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
