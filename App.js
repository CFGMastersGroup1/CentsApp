import LoginScreen from "./app/Screens/LoginScreen";
import { NavigationContainer} from "@react-navigation/native";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./app/Screens/HomeScreen";
import RegisterScreen from "./app/Screens/RegisterScreen";


export default function App(){
  const Stack = createNativeStackNavigator(); 
  
  const emptyUser = {name:'Stranger', email:'', password:''}

  var users = [
    {
      name: 'Kate',
      email:'kate@cents.com',
      password:'kate'
    },
    {
      name: 'Sirad',
      email:'sirad@cents.com',
      password:'sirad'
    },
    {
      name:'Ana',
      email:'ana@cents.com',
      password:'ana'
    }
  ];

  function userReducer(state, action){
    switch(action.type){
      case "ADD_USER":
        console.log('add user')
        return state.users = {...state, users: users.concat([action.payload])}
      case "LOGIN":    
        return state.user = {...state, user: action.payload}
      case "LOG_OFF":
        return state.user ={emptyUser}
      default:
        console.log('default')
        return state
    }
  }

  const initilaState = {user: emptyUser, users: users}

  const store = createStore(userReducer,initilaState);

    
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name = "Login"
            component ={LoginScreen}
          ></Stack.Screen>
          <Stack.Screen
            name = 'Register'
            component={RegisterScreen}
          ></Stack.Screen>
          <Stack.Screen
            name="Home" 
            component={HomeScreen}
            options={{headerShown:false}}
          ></Stack.Screen>
        </Stack.Navigator> 
        </NavigationContainer> 
      </Provider>  
   );
}
