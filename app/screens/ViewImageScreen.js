import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

import colors from '../config/colors';

const image = require('../assets/chair.jpg');

export default function ViewImageScreen() {


  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}>
      <MaterialCommunityIcons name="close" size={30} color="white" />
      </View>

      <View style={styles.deleteIcon}>
      <MaterialCommunityIcons name="trash-can-outline" size={30} color="white" />
      </View>

      <Image source={image} resizeMode="contain" style={styles.image} />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: colors.black,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  closeIcon: {
    position: 'absolute',
    top: 40,
    left: 30,
  },
  deleteIcon: {
    position: 'absolute',
    top: 40,
    right: 30,
  },
});
