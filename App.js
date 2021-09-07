import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';

import WelcomeScreen from './app/screens/WelcomeScreen'
import ViewImageScreen from './app/screens/ViewImageScreen'
import ListingDetailsScreen from './app/screens/ListingDetailsScreen'
import AppButton from './app/components/AppButton'
import AppCard from './app/components/AppCard'
import MessagesScreen from './app/screens/MessagesScreen';


export default function App() {


  return (
    <MessagesScreen />
    

  );
}
