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

export default function HomeScreen({navigation}){
    const Tab = createBottomTabNavigator();

    return(     
      <ThemeProvider>
        <Tab.Navigator>
            <Tab.Screen 
                name="Accounts Summary" 
                component={AccountsSummary}
                options={{
                    tabBarLabel: 'Accounts',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="card-outline" color={color} size={size}/>
                    ),
                }}
        />
            <Tab.Screen 
                name="Transactions" 
                component={Transactions}
                options={{
                    tabBarLabel: 'Transactions',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="pricetags-outline" color={color} size={size}/>
                    ),
                }}
            />
            <Tab.Screen 
                name="Budget" 
                component={Budget}
                options={{
                    tabBarLabel: 'Budget',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="pie-chart-outline" color={color} size={size}/>
                    ),
                }}
            />
            <Tab.Screen 
                name="Login"
                component={LoginScreen}
                options={{
                    tabBarLabel: 'Log off',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="home-outline" color={color} size={size}/>
                    ),
                }}
             />
            </Tab.Navigator>
      </ThemeProvider>  
      
    )
  }