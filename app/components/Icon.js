//use this inside of Listitem.js component in case you want to use icon instead of an image
//example: MyAccountScreen.js
import React from 'react';
import { View } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons'; 

function Icon({
  //giving the props initial value for easy of use the component
  name, 
  size = 30, 
  backgroundColor = '#000', 
  iconColor = '#fff'}) {

  return (
    <View style={{
      width: size,
      height: size,
      borderRadius: size/2,
      //if key and the value is the same, we can remove the value and just use the key
      // backgroundColor: backgroundColor
      backgroundColor,
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <MaterialCommunityIcons name={name} color={iconColor} size={size * 0.5} />
    </View>
  );
}

export default Icon;