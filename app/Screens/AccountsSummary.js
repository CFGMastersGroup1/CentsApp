import { color } from '@rneui/base';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';

// import AppText from '../Components/AppText';
import Screen from '../Components/Screen';
import Card from '../Components/Card';
import colors from '../config/colors';
import QuoteCard from '../Components/QuoteCard';

  const accounts = [
    {
      id: 1,
      title: "Current Account",
      balance: 1400,
      image: require("../assets/centsLogo4.png"),
      sort: "20-22-20",
      accountNumber: 1234567
    },
    {
      id: 2,
      title: "Savings Account",
      balance: 1000,
      image: require("../assets/centsLogo4.png"),
      sort: "00-11-22",
      accountNumber: 7890123,
    },
    {
    id: 3,
      title: "Credit Card",
      balance: -550.87,
      image: require("../assets/centsLogo4.png"),
      sort: "33-44-55",
      accountNumber: 9988776,
    },
  ];    

  export default function AccountsSummary(props) {
    
    return (
    <Screen style={styles.screen}>
          <FlatList
            data={accounts}
            keyExtractor={(listing) => listing.id.toString()}
            renderItem={({ item }) => (
              <Card
                title={item.title}
                subTitle={"£" + item.balance}
                image={item.image}
                sort={item.sort}
                accountNumber={item.accountNumber}
              />
            )}
          />
          <QuoteCard />
        </Screen>
      );
    }
    
    const styles = StyleSheet.create({
      screen: {
        padding: 20,
        backgroundColor: colors.light,
      },
    });
//     <View>
//       <Image source={require('../assets/centsLogo4.png')} />
//       <AppText style={styles.title}>Current Account</AppText>
//       <AppText style={styles.sort}>20-22-20</AppText>
//       <AppText style={styles.account}>01234578</AppText>
//     </View>
  
//       );
// }

// const styles = StyleSheet.create({
//   account: {
//     fontSize: 20,
//     fontWeight: 300,
//     color: colors.medium,
//   },
//   detailsContainer: {
//     padding: 20,
//   },
//   image: {
//     width: '100%',
//     height: 300,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: "500",
//     color: colors.secondary,
//   },
//   sort: {
//     fontSize: 20,
//     fontWeight: 300,
//     color: colors.medium,
//   }
// });