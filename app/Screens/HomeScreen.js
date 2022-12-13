import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Image } from 'react-native';
import MyButton from "../Components/MyButton";


export default function HomeScreen({ navigation }) {

  return (
  <ImageBackground
  resizeMode="cover"
  style={styles.background}
  source={require("../assets/moneytree2.jpg")}
  >
    <View style={styles.logoContainer}>
    <Image
    source={require("../assets/centsLogo4.png")}
    style={styles.logo} />
    <Text style={styles.tagline}>Cents: Making Budget Sense</Text>
    </View>
    <View style={styles.buttonsContainer}>
      <MyButton title="Login" 
      onPress={() =>
        navigation.navigate('Transactions')
      } />
      <MyButton title="Register" color="secondary" />
      <StatusBar style="auto" />
      </View>
  </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: "center",
    width: '100%',
    height: '100%',
  },
  buttonsContainer: {
    padding: 20,
    width: "100%",
  },
  // loginButton: {
  //   width: '100%',
  //   height: 70,
  //   backgroundColor: '#f1c0b9',
// },
  logo: {
    width: 40,
    height: 40,
    // top: 10,
  },

  logoContainer: {
    position: 'absolute',
    top: 20,
    alignItems: 'center',
  },
  // registerButton: {
  //   width: '100%',
  //   height: 70,
  //   backgroundColor: '#88ca5e',
  // },

  tagline: {
    fontSize: 25,
    fontWeight: "600",
    paddingVertical: 20,
  },
  // textStyle: {
  //   color: '#196F3D',
  //   fontSize: 30,
  //   fontWeight: 'normal',
  //   letterSpacing: 0.25,
  //   textDecorationLine: 'none',
  // },
});