//use it when separate items in lists
//for example: MessagesScreen.js
import React from 'react';
import { View, StyleSheet } from 'react-native';

import colors from '../../config/colors';

function ListItemSeparator() {
    return (
        <View style={styles.seperator}></View>
    );
}

const styles = StyleSheet.create({
    seperator: {
        width: '100%',
        height: 1,
        backgroundColor: colors.light,
    }
})

export default ListItemSeparator;