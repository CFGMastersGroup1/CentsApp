import React from "react";
import CurrentAccTable from '../Components/CurrentAccTable';

import colors from "../config/colors";
import AppText from "../Components/AppText";

import { StyleSheet, View } from 'react-native';

export default function Transactions() {

    return (
        
        <View>
        <View style={styles.card}>
          <AppText style={styles.title}>Current Account</AppText>
          </View>
        <CurrentAccTable />
      </View>

        );
  }
  
  const styles = StyleSheet.create({
    card: {
      // borderRadius: 15,
      backgroundColor: colors.white,
      // marginBottom: 20,
      marginTop: 20,
      overflow: "hidden",
      flexDirection: "row",
      padding: 20,
  },
  title: {
    // marginBottom: 7,
    color: colors.primary,
    fontWeight: "bold",
    }
  });