import React from "react";
import { View, StyleSheet, Image } from 'react-native';

import colors from "../../app/config/colors";
import AppText from "./AppText";

export default function QuoteCard() {
    return (
        <View style={styles.card}>
            <Image style={styles.image} source={require("../assets/moneytree2.jpg")} />
            <View style={styles.detailsContainer}>
            <AppText style={styles.title}>Quote of the Day</AppText>
            <AppText style={styles.subTitle}>API here</AppText>
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
    image: {
        width: 120,
        height: 90,
        marginTop: 20,
        marginLeft: 10,
        justifyContent: 'center',
        marginBottom: 20,
    },
    subTitle: {
        color: colors.secondary,
    },
    title: {
        marginBottom: 7,
        color: colors.primary,
        fontWeight: "bold",
    }
})