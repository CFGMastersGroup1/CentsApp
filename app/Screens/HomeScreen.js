import LoginScreen from "./LoginScreen";
import AccountsSummary from "./AccountsSummary";
import Transactions from "./Transactions";
import Budget from "./Budget";
import { NavigationContainer} from "@react-navigation/native";
import { Alert, View } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { ThemeProvider } from '@rneui/themed';
import { Provider } from "react-redux";
import { createStore } from "redux";
import { createNativeStackNavigator } from "@react-navigation/native-stack";



export default function HomeScreen({navigation}){
    const Tab = createBottomTabNavigator();

    // const users = [
    //     {
    //       email:'kate@cents.com',
    //       password:'kate'
    //     },
    //     {
    //       email:'sirad@cents.com',
    //       password:'sirad'
    //     },
    //     {
    //       email:'amy@cents.com',
    //       password:'amy'
    //     }
    //   ];
    
    //   function userCheck(user, users){
    //     return users.some(u => u.email===user.email && u.password===user.password)
    //   }
    
    //   const emptyUser = {email:'', password:''}
    
    //   function userReducer(state, action){
    //     switch(action.type){
    //       case "ADD_USER":
    //         console.log('add user')
    //         return state.user = {...state, user: action.payload}
    //       case "LOGIN":
    //         var user = action.payload
    //         if(!userCheck(user, users)){
    //           Alert.alert('Invalid User','Your email or password is invalid!')
    //           return state
    //         }
    //         else{
    //           Alert.alert('Login complete!')
    //           navigation.navigate('HomeScreen')
    //         }        
    //         console.log(user, userCheck(user, users))
    //         return state.user = {...state, user: action.payload}
    
    //       case "LOG_OFF":
    //         return state.user ={emptyUser}
    //       default:
    //         console.log('default')
    //         return state
    //     }
    //   }
    
    //   const initilaState = {user: emptyUser}
    
    //   const store = createStore(userReducer,initilaState);
 
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