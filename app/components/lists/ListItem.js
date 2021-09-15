import React from 'react';
import { Image, StyleSheet, TouchableHighlight, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import Swipeable from 'react-native-gesture-handler/Swipeable';

import AppText from '../AppText';
import colors from '../../config/colors';

function ListItem({title, subtitle, image, IconComponent, onPress, swipeRightActions, showChevrons}) {
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
                        <AppText style={styles.title} numberOfLines={1}>{title}</AppText>
                        {subtitle && <AppText style={styles.subtitle} numberOfLines={2}>{subtitle}</AppText>}
                    </View>
                    {showChevrons && <MaterialCommunityIcons name='chevron-right' size={25} color={colors.medium}/>}
                </View>
            </TouchableHighlight>
        </Swipeable>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flexDirection: 'row',
        padding: 15,
        backgroundColor: colors.white,
    },
    textContainer: {
        flex: 1,
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
    },
})

export default ListItem;