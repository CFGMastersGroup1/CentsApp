import HomeScreen from "./app/Screens/HomeScreen";
import AccountsSummary from "./app/Screens/AccountsSummary";
import Transactions from "./app/Screens/Transactions";
import Budget from "./app/Screens/Budget";
import { NavigationContainer } from "@react-navigation/native";
import { View } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { customTheme } from './app/theme/Index';
import { ThemeProvider } from '@rneui/themed';

export default function App(){

  const Tab = createBottomTabNavigator();
  
  return (
    <ThemeProvider>
    <NavigationContainer>
      <Tab.Navigator>
      <Tab.Screen 
      name="Home" 
      component={HomeScreen}
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="home-outline" color={color} size={size}/>
        ),
      }}
       />
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
      </Tab.Navigator>
    </NavigationContainer>
    </ThemeProvider>
  );
}
