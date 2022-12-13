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

  const dispach = useDispatch() 

  function checkIfUserexists(user, users){
    return users.some(u => u.email===user.email && u.name===user.name)
  }


  function register(tempUser){  
    if(!userCheck(tempUser, users)){
      Alert.alert('Upsss...','Email or password is invalid')
      return
    }else{
      tempUser = users.find(u => u.email===tempUser.email && u.password===tempUser.password)
      Alert.alert('Hello!','Login sucessful! '+ tempUser.name)
      navigation.navigate('Home') 
    }
    const action ={
      type: "ADD_USER",
      payload: tempUser
    }
    dispach(action)
  }

  function getUser(){
    var tempUser = {name: name, email: email, password: password}
    return tempUser
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
            onChangeText={name => setName(name)}            
    />
    <AppTextInput
            name='email'
            placeholder='Email'
            onChangeText={email => setEmail(email)}            
          />
    <AppTextInput
            name='password'
            placeholder='Password'
            secureTextEntry={true} 
            onChangeText={password => setPassword(password)}     
          />
    <AppTextInput
            name='passwordCheck'
            placeholder='Type your password again'
            secureTextEntry={true}     
    /> 
        
    </View>
    <View style={styles.buttonsContainer}>
      <MyButton 
        title="Sign in" 
        color="secondary" 
        onPress={() => register(getUser())}/>
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