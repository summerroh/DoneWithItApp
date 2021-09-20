import React, { useEffect, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';

const Stack = createNativeStackNavigator();

const AuthNavigator = () => (
 
  <Stack.Navigator>
    <Stack.Screen 
      name='Welcome' 
      component={ WelcomeScreen } 
      options={{ headerShown: false }} />

    <Stack.Screen 
      name='Login' 
      component={ LoginScreen }
     //  options={({ route }) => ({ title: route.params.id })}
    />
    
    <Stack.Screen 
      name='Register' 
      component={ RegisterScreen }
     //  options={({ route }) => ({ title: route.params.id })}
    />
  </Stack.Navigator>
)

export default AuthNavigator;