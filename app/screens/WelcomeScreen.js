import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, ImageBackground, Text, TouchableWithoutFeedback, View, Dimensions, Image, Button } from 'react-native';

import AppText from '../components/AppText';
import AppButton from '../components/AppButton';
import colors from '../config/colors';

const backgroundImage = require('../assets/background.jpg');
const logo = require('../assets/logo-red.png');

export default function WelcomeScreen({ navigation }) {


  return (
    <View style={styles.container}>
      <ImageBackground source={backgroundImage} resizeMode="cover" blurRadius={2} style={styles.backgroundImage}>
        <View style={styles.logoView}>
          <Image source={logo} style={styles.logo}></Image>
          <AppText>sell what you don't need</AppText>
        </View>
        
        <View style={styles.buttonView}>
          <AppButton title='LOGIN' onPress={() => navigation.navigate("Login")}>

          </AppButton>

          <AppButton title='REGISTER' color='secondary' onPress={() => navigation.navigate("Register")}>

          </AppButton>
        </View>
      </ImageBackground>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  backgroundImage: {
    flex: 1,
  },
  logoView: {
    flex: 0.5,
    top: 70,
    alignSelf: 'center',
    // alignContent: 'center',
    // textAlign: 'center',
  },
  logo: {
    width: 70,
    height: 70,
    alignSelf: 'center',
    marginBottom: 10,
  },
  buttonView: {
    flex: 0.5,
    margin: 30,
    // position: 'absolute',
    justifyContent: 'flex-end',
  },
  text: {
    fontSize: 18,
  },
});
