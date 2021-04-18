import React, { useEffect, useRef } from 'react'
import { Text, AppState, Keyboard, Animated, Image, StyleSheet } from 'react-native'


const logoViewScale = useRef(new Animated.Value(1)).current;

const logoImage = require('../');
const title:string = "The Counsellor";
const ANIMATION_DURATION = 2;

useEffect(() => {
  // AppState.addEventListener = 
  Keyboard.addListener(
    'keyboardDidShow',
    showKeyboard
  );

  // AppState.addEventListener = 
  Keyboard.addListener(
    'keyboardDidHide',
    hideKeyboard
  );

  // NEVER FORGET TO REMOVE YOUR LISTENERS ON
  // LEAVING THE SCREEN
  return () => {
    // AppState.removeEventListener = 
    Keyboard.removeListener(
      'keyboardDidShow',
      showKeyboard
    );
    // AppState.removeEventListener = 
    Keyboard.removeListener(
      'keyboardDidHide',
      hideKeyboard
    );
  };
}, []);

const showKeyboard = () => {
  Animated.timing(logoViewScale, {
    toValue: 0.5,
    duration: ANIMATION_DURATION,
    useNativeDriver: true,
  }).start();
};

const hideKeyboard = () => {
  Animated.timing(logoViewScale, {
    toValue: 1,
    duration: ANIMATION_DURATION,
    useNativeDriver: true,
  }).start();
};




const LogoView = () => {
  return (
    <Animated.View
    style={[styles.container, { transform: [{ scale: logoViewScale }] }]}
  >
  <Image style={styles.image} source={logoImage} />
  <Text style={styles.text}>{title}</Text>
  </Animated.View>
  )
}

export default LogoView

const styles = StyleSheet.create({
  container:{

  },
  image:{

  },
  text:{

  }

})