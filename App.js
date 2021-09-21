
import React, { useEffect, useState } from 'react';
import { Button, Text } from 'react-native'

import Screen from './app/components/Screen';
import ListingEditScreen from './app/screens/ListingEditScreen';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 


import WelcomeScreen from './app/screens/WelcomeScreen';
import LoginScreen from './app/screens/LoginScreen';
import RegisterScreen from './app/screens/RegisterScreen';
import AuthNavigator from './app/navigation/AuthNavigator';
import AppNavigator from './app/navigation/AppNavigator';
import navigationTheme from './app/navigation/navigationTheme';


export default function App() {
  
  return (

    <NavigationContainer theme={navigationTheme}>
      <AppNavigator />
    </NavigationContainer>

  );
}
