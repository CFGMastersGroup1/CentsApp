import HomeScreen from "./src/Screens/HomeScreen";
import AccountsSummary from "./src/Screens/AccountsSummary";
import Transactions from "./src/Screens/Transactions";
import Budget from "./src/Screens/Budget";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


export default function App(){

  const Tab = createBottomTabNavigator();

  const Stack = createNativeStackNavigator();
  
  return (
    <NavigationContainer>
      <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Accounts Summary" component={AccountsSummary} />
      <Tab.Screen name="Transactions" component={Transactions} />
      <Tab.Screen name="Budget" component={Budget} />
      </Tab.Navigator>
 
      {/* <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="About Us" component={AboutUsScreen} />
      </Stack.Navigator> */}
    </NavigationContainer>
  );
}
