//used in ImageInputList.js
import React, { useEffect, useState } from 'react';
import { StyleSheet, TextInput, View, Text, Button, Image, TouchableWithoutFeedback, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

import Screen from './Screen';
import colors from '../config/colors';


function ImageInput({imageUri, onChangeImage}) {
  useEffect(() => {
    requestPermission();
  }, []);

  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!granted) alert("You need to enable permission to accss the library")
  };

  const handlePress = () => {
    if (!imageUri) selectImage();
    else Alert.alert('Delete', 'Are you sure you want to delete this image?', [
      { text: 'Yes', onPress: () => onChangeImage(null)},
      { text: 'no'}
    ])
  };

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5
      });
      (!result.cancelled)
      onChangeImage(result.uri);
    } catch (error) {
      console.log('Error reading an image', error);
    }
  }


  return (
      <TouchableWithoutFeedback onPress={handlePress}>
        <View style={styles.imageContainer}>

          {!imageUri && <MaterialCommunityIcons name='camera' color={colors.medium} size={50} />}
          {imageUri && <Image style={styles.image} source={{ uri: imageUri }} ></Image>}

        </View>
      </TouchableWithoutFeedback>
    
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.light,
    width: 100,
    height: 100,
    borderRadius: 15,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
})

export default ImageInput;