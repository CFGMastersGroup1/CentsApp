import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View, Alert } from 'react-native';
import { useState } from 'react';
import { Image } from 'react-native';
import MyButton from "../Components/MyButton";
import AppTextInput from '../Components/AppTextInput';
import { useDispatch, useSelector } from 'react-redux';


export default function LoginScreen({navigation}) {

  const user = useSelector((state) => state.user)
  const users = useSelector((state) => state.users)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispach = useDispatch() 
  
  //function checking if user exist in our dummy data base 
  // we pass user -> date from our input fields, and check it in users (our dummy db)
  function userCheck(user, users){
    return users.some(u => u.email===user.email && u.password===user.password)
  }

  //function for sign in, it passes user data and make validation of them
  //if user is in our dummy db action LOGIN perform
  function signIn(tempUser){  
    if(!userCheck(tempUser, users)){
      Alert.alert('Upsss...','Email or password is invalid')
      return
    }else{
      tempUser = users.find(u => u.email===tempUser.email && u.password===tempUser.password)
      Alert.alert('Hello!','Login sucessful! Welcome '+ tempUser.name)
      navigation.navigate('Home') 
    }
    const action ={
      type: "LOGIN",
      payload: tempUser
    }
    dispach(action)
  }

  // getting data from input fields and returnig temporary user object
  function getUser(){
    var tempUser = {name: '', email: email, password: password}
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
    <Text style={styles.tagline}>Cents: Put Sense to Budget</Text>
    <Text style={styles.tagline}>Hello {user.name}!</Text>
  </View>
  <View style={styles.textInputContainer}>
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
  </View>
  <View style={styles.buttonsContainer}>
    <MyButton 
        title="Login"
        onPress={() => signIn(getUser())} />
    <MyButton 
        title="Register" 
        color="secondary"
        onPress={()=> navigation.navigate('Register')} />
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
    height: '100%'
  },
  buttonsContainer: {
    padding: 20,
    width: "100%"
  },

  textInputContainer:{
    padding: 20,
    width: "100%"
  },

  logo: {
    width: 40,
    height: 40
  },

  logoContainer: {
    position: 'absolute',
    top: 20,
    alignItems: 'center'
  },

  tagline: {
    fontSize: 25,
    fontWeight: "600",
    paddingVertical: 20
  }
});