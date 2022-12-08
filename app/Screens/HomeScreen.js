import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';

export default function HomeScreen(props) {

  return (
  <ImageBackground
  // resizeMode='cover'
  style={styles.background}
  source={require("../assets/moneytree.jpg")}>
    <View style={styles.logoContainer}>
    <Image 
    source={require("../assets/centsLogo4.png")}
    style={styles.logo} />
    <Text>Put Sense to Budget</Text>
    </View>
      <View style={styles.loginButton}></View>
      <View style={styles.registerButton}></View>
      {/* <Text style={styles.textStyle}>Cents!</Text>
      <Text>Home</Text> */}
      <StatusBar style="auto" />
  
  </ImageBackground>

  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: "center",
    width: '100%',
    height: 530,
  },
  loginButton: {
    width: '100%',
    height: 70,
    backgroundColor: '#f1c0b9',
  },
  logo: {
    width: 150,
    height: 150,
  },

  logoContainer: {
    position: 'absolute',
    top: 70,
  },
  registerButton: {
    width: '100%',
    height: 70,
    backgroundColor: '#88ca5e',
  },
  // container: {
  //   flex: 1,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   // padding: 20,
  //   // margin: 10,
  //   flexDirection: "column",
  // },

  textStyle: {
    color: '#196F3D',
    fontSize: 30,
    fontWeight: 'normal',
    letterSpacing: 0.25,
    textDecorationLine: 'none',
  },
});