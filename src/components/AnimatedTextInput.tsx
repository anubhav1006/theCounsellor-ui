import React, { useRef, useEffect } from 'react'
import { StyleSheet, Text, TouchableOpacity, Animated, TextInput, Image } from 'react-native'
import { InputOptionsType } from '../types';


export type InputPropsType = {
  options: InputOptionsType
}

const renderIcon = (type: string) =>{
  // switch(type) {
  //   case 'EMAIL' : 
  //     return require('../');
  // }
}

const AnimatedTextInput = (props:InputPropsType) => {

const inputRef = useRef<TextInput>(null);
const inputScale = useRef(new Animated.Value(1)).current;

const ANIMATION_DURATION = 2;



const setActive = () => {
  if(inputRef !== null && inputRef.current !== null){
    inputRef.current.focus();

    Animated.timing(inputScale, {
      toValue: 1.15,
      duration: ANIMATION_DURATION,
      useNativeDriver: true,
    }).start();
}
};


const setInactive = () => {
  Animated.timing(inputScale, {
    toValue: 1,
    duration: ANIMATION_DURATION,
    useNativeDriver: true,
  }).start();
};


  const {options} = props;

  useEffect(() => {
    const {options} = props;
    if (options.active) {
      setActive();
    } else {
      setInactive();
    }
  }, [options]);
  
  return (
    <TouchableOpacity
    activeOpacity={1}
    onPress={() => options.onPress(options.type)}
  >
    <Animated.View
      style={[
        styles.container,
        { transform: [{ scale: inputScale }] },
        options.active && styles.$activeShadow,
      ]}
      pointerEvents="none"
    >
      {/* <Image style={styles.icon} source={renderIcon(options.type)} /> */}
      {options.icon}
      <Text style={styles.placeholder}>{options.placeholder}</Text>
      <TextInput
        style={styles.input}
        ref={inputRef}
        keyboardType={options.keyboardType ? options.keyboardType : 'default' }
        secureTextEntry={options.isPassword}
        onChangeText={options.onChangeText}
        value={options.value}
        autoCapitalize="none"
      />
    </Animated.View>
  </TouchableOpacity>
  )
}

export default AnimatedTextInput

const styles = StyleSheet.create({
  container:{},
  icon:{},
  placeholder:{},
  input:{},
  $activeShadow:{},

})
