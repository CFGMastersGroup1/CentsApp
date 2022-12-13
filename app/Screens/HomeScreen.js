import LoginScreen from "./LoginScreen";
import AccountsSummary from "./AccountsSummary";
import Transactions from "./Transactions";
import Budget from "./Budget";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { ThemeProvider } from '@rneui/themed';




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