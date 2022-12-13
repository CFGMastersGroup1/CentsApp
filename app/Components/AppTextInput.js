import React from "react";
import { TextInput, StyleSheet, Platform } from "react-native";

export default function AppTextInput({onChangeText, placeholder,secureTextEntry,value,name}) {
  return <TextInput 
            name={name}
            style={[styles.input]}
            onChangeText={onChangeText}
            placeholder={placeholder}
            secureTextEntry={secureTextEntry}
            value={value}  
        ></TextInput>;
}

const styles = StyleSheet.create({
  input: {
    marginTop:10,
    backgroundColor: 'white',
    borderColor: 'none',
    height: 40,
    padding: 10,
    borderRadius: 25,
    width: '100%',
    height: 55,
    marginVertical: 10,
  },
});