import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';
import { Card } from '@rneui/themed';

import BudgetPie from '../Components/BudgetPie';



export default function Budget() {

  const categories = [
    {
       name: 'Groceries',
       image: require("../assets/ff6666.png"),
    },
    {
      name: 'Bills',
      image: require("../assets/4ecdc4.png"),
   },
   {
    name: 'Savings',
    image: require("../assets/6e6969.png"),
 },
   ]

   return (
    <View style={styles.container}>
    <BudgetPie />
    <View style={styles.card}>
    <Card>
      <Card.Title>CATEGORIES</Card.Title>
      <Card.Divider />
      {categories.map((u, i) => {
        return (
          <View key={i} style={styles.user}>
            <Image 
              style={styles.image}
              resizeMode="cover"
              source={u.image}
            />
            <Text style={styles.name}>{u.name}</Text>
          </View>
        );
      })}
    </Card>
    </View>
    </View>
   )
    }

const styles = StyleSheet.create({
  card: {
    marginTop: 50,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    // marginTop: 10,
  },
  image: {
    width: 10,
    height: 10,
  },
  user: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  name: {
    padding: 5,
    fontSize: 16,
  }
});