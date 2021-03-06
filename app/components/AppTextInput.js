import React from 'react';
import { TextInput, View, StyleSheet, Platform } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

import defaultStyles from '../config/styles';

//...otherProps means you can use all the props of textinput outside of this component(as a consumer of this component)
function AppTextInput({ icon, width, ...otherProps }) {
  return (
    <View style={[styles.container, {width: width}]}>
      {icon && <MaterialCommunityIcons name={icon} size={20} color={defaultStyles.colors.medium} style={styles.icon}/>}
      <TextInput 
        placeholderTextColor={defaultStyles.colors.medium}
        style={defaultStyles.text} {...otherProps}></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.light,
    borderRadius: 25,
    flexDirection: 'row',
    width: '100%',
    padding: 15,
    marginVertical: 10,
    alignItems: 'center',
  },
  icon: {
    marginRight: 10,
  }
})

export default AppTextInput;