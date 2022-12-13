import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View, Alert } from 'react-native';
import { useState } from 'react';
import { Image } from 'react-native';
import MyButton from "../Components/MyButton";
import AppTextInput from '../Components/AppTextInput';
import { useDispatch, useSelector } from 'react-redux';


export default function RegisterScreen({navigation}) {

  const users = useSelector((state) => state.users)

  const [name, setName] = useState('Stranger')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [controlPassword, setControlPassword] = useState('control')

  const dispach = useDispatch() 

  // checkin if new user is in our dummy db
  function isUserExists(newUser, users){
    return users.some(u => u.email===newUser.email && u.name===newUser.name)
  }

  //basic validation of input
  function checkInput(){
    if (password==controlPassword && email!=='' && name!==''){
      return true
    }else{
      Alert.alert('Upsss...','Something went wrong! Check your input')
      return false
    }
  }

  // getting data from input fields and returnig new user object
  function getUser(){
      var newUser = {name: name, email: email, password: password}
      return newUser    
  }  

  //function for register
  //if user isn't in our dummy db action ADD_USER perform
  function register(){  
    if(!checkInput()){
      return
    }

    newUser = getUser()

    if(isUserExists(newUser, users)){
      Alert.alert('Upsss...','That user already exists!')
      return
    }else{
      Alert.alert('Hello!','Register sucessful! Welcome '+ newUser.name)
      navigation.navigate('Login') 
    }
    const action ={
      type: "ADD_USER",
      payload: newUser
    }
    dispach(action)
  }

  

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
      <Text style={styles.tagline}>Hello Stranger!</Text>
    </View>
    <View style={styles.textInputContainer}>
    <AppTextInput
            name='name'
            placeholder='Name'
            onChangeText={n => setName(n)}            
    />
    <AppTextInput
            name='email'
            placeholder='Email'
            onChangeText={e => setEmail(e)}            
          />
    <AppTextInput
            name='password'
            placeholder='Password'
            secureTextEntry={true} 
            onChangeText={p => setPassword(p)}     
          />
    <AppTextInput
            name='passwordCheck'
            placeholder='Type your password again'
            secureTextEntry={true}  
            onChangeText={cp => setControlPassword(cp)}   
    /> 
        
    </View>
    <View style={styles.buttonsContainer}>
      <MyButton 
        title="Sign in" 
        color="secondary" 
        onPress={() => register()}/>
         <MyButton 
        title="Cancel"
        onPress={() => navigation.navigate('Login')} />
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

  textInputContainer:{
    padding: 20,
    width: "100%",
  },

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