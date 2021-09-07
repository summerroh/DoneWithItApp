import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';

import colors from '../config/colors';

function AppButton({title, onPress, color = "primary"}) {
    return (
 

        <TouchableOpacity
        style={[styles.button, {backgroundColor: colors[color]}]}
        onPress={onPress}>

        <Text style={styles.text}>{title}</Text>

        </TouchableOpacity>

    );
}

const styles = StyleSheet.create({

    button: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 10,
        borderRadius: 50,
        paddingTop: 15,
        paddingBottom: 15,
        backgroundColor: colors.primary,
        marginVertical: 10,
    },
    text: {
        color: colors.white,
        fontSize: 18,
        textTransform: 'uppercase',
        fontWeight: 'bold',
    }
})

export default AppButton;