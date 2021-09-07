import React, { useState } from 'react';
import { TextInput, View, StyleSheet, TouchableWithoutFeedback, Modal, Button, FlatList } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

import AppText from './AppText';
import defaultStyles from '../config/styles';
import Screen from './Screen';
import PickerItem from './PickerItem';

//...otherProps means you can use all the props of textinput outside of this component(as a consumer of this component)
function AppPicker({ icon, placeholder, items, onSelectItem, selectedItem }) {
  const [modalVisible, setModalVisible] = useState(false);
  
  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={styles.container}>
          {icon && 
            <MaterialCommunityIcons 
              name={icon} 
              size={20} 
              color={defaultStyles.colors.medium} 
              style={styles.icon}/>}

          <AppText style={styles.text}>{selectedItem ? selectedItem.label : placeholder }</AppText>

            <MaterialCommunityIcons 
              name='chevron-down'
              size={20} 
              color={defaultStyles.colors.medium} 
              />
        </View>
      </TouchableWithoutFeedback>

      <Modal visible={modalVisible} animationType='slide'>
        <Screen>
        <Button title='Close' onPress={() => setModalVisible(false)}></Button>
        <FlatList
          data={items}
          keyExtractor={item => item.value.toString()}
          renderItem={({ item }) => 
          <PickerItem 
            label={item.label} 
            onPress={() => {
              setModalVisible(false);
              onSelectItem(item);
            }} />
          }
        />
        </Screen>
      </Modal>
    </>
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
  },
  text: {
    flex: 1,
  },
})

export default AppPicker;