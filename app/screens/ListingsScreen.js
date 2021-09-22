import React, { useEffect, useState } from 'react';
import { View, StyleSheet, FlatList, ActivityIndicator } from 'react-native';

import AppCard from '../components/AppCard';
import AppText from '../components/AppText';
import AppButton from '../components/AppButton';
import Screen from '../components/Screen';
import colors from '../config/colors';
import routes from '../navigation/routes';

//imports from the backend
import listingsApi from '../api/listings';
 

function ListingsScreen({ navigation }) {
// backend stuff starts //
  const [listings, setListings] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  //calls the api the first time this component gets render
  useEffect(() => {
    loadListings();
  }, []);

  const loadListings = async () => {
    setLoading(true);
    const response = await listingsApi.getListings();
    setLoading(false);

    if (!response.ok) return setError(true);
    
    setError(false);
    setListings(response.data);
  }
// backend stuff ends //

  return (
    <Screen style={styles.screen}>
      {/* below lines are backend stuff, print error message if Error == true*/}
      {error && (<> 
        <AppText>Couldn't retrieve the listings.</AppText> 
        <AppButton title='Retry' onPress={loadListings} />
      </>)}
         {/* below line is backend stuff,show loading animation while getting the data */}
        <ActivityIndicator animating={loading} size='large' color="#0000ff"/>
        <FlatList
          data={listings}
          keyExtractor={Item => Item.id.toString()}
          renderItem={({ item }) => 
            <AppCard
              title={item.title}
              subTitle={"$" + item.price}
              imageUrl={item.images[0].url}
              onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
              />}
          />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light,
  },
})

export default ListingsScreen;