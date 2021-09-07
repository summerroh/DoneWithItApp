import React from 'react';
import { Image, StyleSheet, TouchableHighlight, View } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';

import AppText from './AppText';
import colors from '../config/colors';

function ListItem({title, subtitle, image, IconComponent, onPress, swipeRightActions}) {
    return (
        <Swipeable renderRightActions={swipeRightActions}>
            <TouchableHighlight 
                underlayColor={colors.light}
                onPress={onPress}>
                <View style={styles.container}>
                    {/* use this iconcomponent from outside when you want to add an icon */}
                    {IconComponent}
                    {/* check if ther is an image and if true, render the image component */}
                    {image && <Image style={styles.image} source={image} />}
                    <View style={styles.textContainer}>
                        <AppText style={styles.title}>{title}</AppText>
                        {subtitle && <AppText style={styles.subtitle}>{subtitle}</AppText>}
                    </View>
                </View>
            </TouchableHighlight>
        </Swipeable>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 15,
        alignItems: 'center',
        backgroundColor: colors.white,
    },
    textContainer: {
        marginLeft: 10,
        justifyContent: 'center',
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
    },
    title: {
        fontWeight: '500',
    },
    subtitle: {
        color: colors.medium,
    }
})

export default ListItem;