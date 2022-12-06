import React from "react";
import Home from "./src/Screens/Home";
import AccountsSummary from "./src/Screens/AccountsSummary";
import Budget from "./src/Screens/Budget";
import Transactions from "./src/Screens/Transactions";
import { NativeBaseProvider, Text, Box, Button, Icon, Footer, FooterTab } from "native-base";
import {customTheme} from "./src/theme/Index";
import { TabNavigator } from "react-navigation";
export default (MainScreenNavigator = TabNavigator(
  {
    Home: { screen: Home },
    AccountsSummary: { screen: AccountsSummary },
    Budget: { screen: Budget },
    Transactions: { screen: Transactions}
  },
  {
    tabBarPosition: "bottom",
    tabBarComponent: props => {
      return (
        <Footer>
          <FooterTab>
            <Button
              vertical
              active={props.navigationState.index === 0}
              onPress={() => props.navigation.navigate("Home")}>
              <Icon name="home" />
              <Text>Home</Text>
            </Button>
            <Button
              vertical
              active={props.navigationState.index === 1}
              onPress={() => props.navigation.navigate("AccountsSummary")}>
              <Icon name="briefcase" />
              <Text>Accounts Summary</Text>
            </Button>
            <Button
              vertical
              active={props.navigationState.index === 2}
              onPress={() => props.navigation.navigate("Budget")}>
              <Icon name="headset" />
              <Text>Budget</Text>
            </Button>
            <Button
              vertical
              active={props.navigationState.index === 3}
              onPress={() => props.navigation.navigate("Transactions")}>
              <Icon name="headset" />
              <Text>Transactions</Text>
            </Button>
          </FooterTab>
        </Footer>
      );
    }
  }
));