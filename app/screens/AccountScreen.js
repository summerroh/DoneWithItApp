import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';

import { ListItem, ListItemSeparator } from '../components/lists';
import Screen from '../components/Screen';
import colors from '../config/colors';
import Icon from '../components/Icon';
import routes from "../navigation/routes";

const menuItems = [
  {
    title: 'My Listings',
    icon: {
      name: 'format-list-bulleted',
      backgroundColor: colors.primary
    },
  },
  {
    title: 'My Messages',
    icon: {
      name: 'email',
      backgroundColor: colors.secondary
    },
    targetScreen: routes.MESSAGES,
  }
]

function MyAccountScreen({ navigation }) {
  return (

    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title='Summer Roh'
          subtitle='summerrohh@gmail.com'
          image={require('../assets/summer.jpg')}></ListItem>
      </View>

      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={Item => Item.title} 
          ItemSeparatorComponent={ListItemSeparator}
          renderItem={({ item }) =>
            <ListItem
              title={item.title}
              IconComponent={
                <Icon name={item.icon.name} backgroundColor={item.icon.backgroundColor} />
              }
              onPress={() => navigation.navigate(item.targetScreen)}
              />}
              />
      </View>

      <View style={styles.container}>
        <ListItem
          title='Log Out'
          IconComponent={
            <Icon name='logout' backgroundColor={colors.yellow} />
          }>
        </ListItem>
      </View>
      
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light,
  },
  container: {
    marginVertical: 20,
  },
  menuBox: {
    backgroundColor: colors.white,
    flexDirection: 'row',
    padding: 15,
    alignItems: 'center',
  },
  listingsIcon: {
    backgroundColor: colors.primary,
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  messagesIcon: {
    backgroundColor: colors.secondary,
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  logoutIcon: {
    backgroundColor: colors.yellow,
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
})

export default MyAccountScreen;