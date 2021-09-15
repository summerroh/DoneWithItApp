import React from 'react';
import { Image, View, StyleSheet, Text } from 'react-native';

import colors from '../config/colors';
import AppText from './AppText';

// const image = require('../assets/jacket.jpg');

function AppCard({title, subtitle, image}) {
    return (

            <View style={styles.card}>
                <Image source={image} style={styles.image} />
                    
                <View style={styles.textContainer}>
                    <AppText numberOfLines={1} style={styles.title}>{title}</AppText>
                    <AppText numberOfLines={1} style={styles.subtitle}>{subtitle}</AppText>
                </View>
            </View>
    );
}

const styles = StyleSheet.create({
    card: {
        height: 300,
        margin: 20,
        backgroundColor: colors.white,
        overflow: 'hidden',
        borderRadius: 15,
    },
    image: {
        width: '100%',
        height: 220,
    },
    textContainer: {
        padding: 20,
    },
    title: {
        marginBottom: 7,
    },
    subtitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: colors.secondary,
    },
})

export default AppCard;