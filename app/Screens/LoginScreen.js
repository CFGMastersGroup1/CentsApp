import React, { useState } from "react";
import { StyleSheet, Image } from "react-native";
import MyButton from "../Components/MyButton";

import Screen from "../Components/Screen";


export default function LoginScreen(props) {
    
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    
    return (
        <Screen style={styles.container}>
            <Image style={styles.logo} source={require("../assets/centsLogo4.png")}/>
            <AppInputText
            autoCapitalize="none"
            autoCorrect={false}
            icon="email"
            keyboardType="email-address"
            onChangeText={text => setEmail(text)}
            placeholder="Email"
            textContentType="emailAddress"
            />
            <AppTextInput
            autoCapitalize="none"
            autoCorrect={false}
            icon="lock"
            onChangeText={text => setPassword(text)}
            secureTextEntry={true}
            textContentType="password"
            />
            <MyButton title="Login" onPress={() => console.log()}/>
        </Screen>
    );
}

const styles = StyleSheet.create ({
    container: {
        padding: 10
    },
    logo: {
        width: 80,
        height: 80,
        alignSelf: "center",
        marginTop: 50,
        marginBottom: 20,
    }
})