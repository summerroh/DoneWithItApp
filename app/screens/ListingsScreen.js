import React, { useEffect, useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';

import ActivityIndicator from '../components/ActivityIndicator';
import AppCard from '../components/AppCard';
import AppText from '../components/AppText';
import AppButton from '../components/AppButton';
import Screen from '../components/Screen';
import colors from '../config/colors';
import routes from '../navigation/routes';

//imports for the backend
import listingsApi from '../api/listings';
import useApi from '../hooks/useApi';

function ListingsScreen({ navigation }) {
  const getListingsApi = useApi(listingsApi.getListings);

    useEffect(() => {
      getListingsApi.request();
  }, []);
  
// what the 7 lines of code above is doing starts //
  // const [listings, setListings] = useState([]);
  // const [error, setError] = useState(false);
  // const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   loadListings();
  // }, []);

  // const loadListings = async () => {
  //   setLoading(true);
  //   const response = await listingsApi.getListings();
  //   setLoading(false);

  //   if (!response.ok) return setError(true);
    
  //   setError(false);
  //   setListings(response.data);
  // }
// what the 7 lines of code above is doing finishes //

  return (
    <Screen style={styles.screen}>
      {/* below lines are backend stuff, print error message if Error == true*/}
      {getListingsApi.error && (<> 
        <AppText>Couldn't retrieve the listings.</AppText> 
        <AppButton title='Retry' onPress={loadListings} />
      </>)}
         {/* below line is backend stuff,show loading animation while getting the data */}
        <ActivityIndicator visible={getListingsApi.loading} />
        <FlatList
          data={getListingsApi.data}
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