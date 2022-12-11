import React from "react";
import { View, StyleSheet, Image } from 'react-native';

import colors from "../../app/config/colors";
import AppText from "./AppText";

export default function Card({ title, subTitle, image, sort, accountNumber }) {
    return (
        <View style={styles.card}>
            <Image style={styles.image} source={image} />
            <View style={styles.detailsContainer}>
            <AppText style={styles.title}>{title}</AppText>
            <AppText style={styles.subTitle}>{subTitle}</AppText>
            <AppText style={styles.sort}>{sort}  {accountNumber}</AppText>
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
        width: 30,
        height: 30,
        marginTop: 30,
        marginLeft: 10,
    },
    subTitle: {
        color: colors.secondary,
        fontWeight: "bold",
        marginbottom: 15,
    },
    title: {
        marginBottom: 7
    },
    sort: {
        color: colors.grey,
        marginTop: 10,
    },
    accountNumber: {
        color: colors.medium,
    }
})