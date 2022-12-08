import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function AccountsSummary() {
    return (
      <View style={styles.container}>
      <Text style={styles.textStyle}>Cents!</Text>
      <Text>Accounts</Text>
      <StatusBar style="auto" />
    </View>
  
      );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    // padding: 20,
    // margin: 10,
    flexDirection: "column",
  },

  textStyle: {
    color: '#196F3D',
    fontSize: 30,
    fontWeight: 'normal',
    letterSpacing: 0.25,
    textDecorationLine: 'none',
  },
});