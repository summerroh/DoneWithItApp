import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

import AppText from '../components/AppText';
import colors from '../config/colors';
import ListItem from '../components/ListItem';

function ListingDetailsScreen(props) {
    return (
        <View>
            <Image style={styles.image} source={require('../assets/jacket.jpg')} />
            <View style={styles.textContainer}>
                <AppText style={styles.title}>레드자켓 사고시픈사람?</AppText>
                <AppText style={styles.price}>$5600</AppText>
                <View style={styles.userContainer}>
                    <ListItem
                        image={require("../assets/mosh.jpg")}
                        title='Mosh Hamedani'
                        subtitle='5 Listings' />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 300,
    },
    textContainer: {
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: '500',
    },
    price: {
        color: colors.secondary,
        fontWeight: 'bold',
        fontSize: 20,
        marginVertical: 10,
    },
    userContainer: {
        marginVertical: 40,
    }
})

export default ListingDetailsScreen;