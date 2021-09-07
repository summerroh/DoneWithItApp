import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';

import AppCard from '../components/AppCard';
import Screen from '../components/Screen';
import colors from '../config/colors';

const listings = [
  {
    id: 1,
    title: 'Red jacket for sale',
    subtitle: 100,
    image: require('../assets/jacket.jpg')
  },
  {
    id: 2,
    title: 'Couch in great condition',
    subtitle: 1000,
    image: require('../assets/couch.jpg')
  }
]

function ListingsScreen() {
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <FlatList
          data={listings}
          keyExtractor={Item => Item.id.toString()}
          renderItem={({ item }) => 
            <AppCard
              title={item.title}
              subtitle={"$" + item.subtitle}
              image={item.image}
              />}
          />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light,
  },
  container: {
    flex: 1,
  },
})

export default ListingsScreen;