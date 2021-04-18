import React, { useRef } from 'react'
import { StyleSheet, Text, View, Image, TextInput } from 'react-native'
import { InputOptionsType } from '../types';

export type InputPropsType = {
  options: InputOptionsType
}
const inputRef = useRef(null);

const CustomTextInput = (props:InputPropsType) => {
  const {options} = props;
  return (
    <View>
      <Image style={styles.icon} source={require('../')} />
      <Text style={styles.placeholder}>{options.placeholder}</Text>
      <TextInput
        style={styles.input}
        ref={inputRef}
        keyboardType={options.keyboardType}
        secureTextEntry={options.isPassword}
        onChangeText={options.onChangeText}
        value={options.value}
        autoCapitalize="none"
      />
  </View>
  )
}

export default CustomTextInput

const styles = StyleSheet.create({
  icon:{},
  placeholder:{},
  input:{}
})
