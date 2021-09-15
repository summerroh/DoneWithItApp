//parent: AppFormPicker
import React, { useState } from 'react';
import { View, StyleSheet, TouchableWithoutFeedback, Modal, Button, FlatList } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

import AppText from './AppText';
import defaultStyles from '../config/styles';
import Screen from './Screen';
import PickerItem from './PickerItem';

//...otherProps means you can use all the props of textinput outside of this component(as a consumer of this component)
function AppPicker({ icon, placeholder, items, onSelectItem, selectedItem, width, numberOfColumns=1, PickerItemComponent=PickerItem, }) {
  const [modalVisible, setModalVisible] = useState(false);
  
  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={[styles.container, {width: width}]}>
          {icon && 
            <MaterialCommunityIcons 
              name={icon} 
              size={20} 
              color={defaultStyles.colors.medium} 
              style={styles.icon}/>}

          { selectedItem ? (<AppText style={styles.text}>{selectedItem.label}</AppText> 
            ): (<AppText style={styles.placeholder}>{placeholder}</AppText> )}

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
          // contentContainerStyle={{alignItems: 'center'}}
          numColumns={numberOfColumns}
          data={items}
          keyExtractor={item => item.value.toString()}
          renderItem={({ item }) => 
          <PickerItemComponent 
            item={item}
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
  placeholder: {
    color: defaultStyles.colors.medium,
    flex: 1,
  },
})

export default AppPicker;