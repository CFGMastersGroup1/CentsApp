import React, { useEffect, useState } from "react";
import { View, StyleSheet, Image, Text } from 'react-native';

import colors from "../../app/config/colors";
import AppText from "./AppText";


export default function QuoteCard() {
    const [quote, setQuote] = useState({'sentence':'', 'author':''});

    const fechQuote = async () =>{
        fetch('https://zenquotes.io/api/today/',{
          method: 'POST',
          headers: {
            "Accept": 'application/json',
            "Content-Type": 'application/json'
          }
        })
        .then(response => {return response.json()})
        .then(q => setQuote({
            'sentence': q[0].q,
            'author': q[0].a
        }))
        .catch(err =>{console.log('Error: '+err)})
      };

      useEffect(() => {
        fechQuote();
      },[]);

    return (
        <View style={styles.card}>
            <View style={styles.detailsContainer}>
                <AppText style={styles.title}>Thoughts for Pence</AppText>
                <AppText style={styles.subTitle}>{quote.sentence}</AppText>
                <AppText style={styles.author}>{quote.author}</AppText>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 15,
        backgroundColor: colors.white,
        marginBottom: 20,
        marginTop: 20,
        overflow: "hidden",
        flexDirection: "row",
    },
    detailsContainer: {
        padding: 20,
    },
    subTitle: {
        color: colors.secondary,
        fontStyle: "italic",
        // fontFamily: 'serif',
    },
    author: {
        paddingTop: 10,
        color: colors.medium,
        textAlign: 'right',
        fontSize: 15

    },
    title: {
        marginBottom: 7,
        color: colors.primary,
        fontWeight: "bold",
    }
})