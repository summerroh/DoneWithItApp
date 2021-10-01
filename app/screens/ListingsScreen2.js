import React from "react";
import { FlatList, StyleSheet } from "react-native";

import AppCard from "../components/AppCard";
import colors from "../config/colors";
import routes from "../navigation/routes";
import Screen from "../components/Screen";

const listings = [
  {
    id: 1,
    title: "Red jacket for sale",
    price: 100,
    image: require("../assets/jacket.jpg"),
  },
  {
    id: 2,
    title: "Couch in great condition",
    price: 350,
    image: require("../assets/couch.jpg"),
  },
  {
    id: 3,
    title: "Vintage camera for sale",
    price: 400,
    image: require("../assets/camera.jpg"),
  },
  {
    id: 4,
    title: "Adidas trainers",
    price: 50,
    image: require("../assets/shoes.jpg"),
  },
];

function ListingsScreen2({ navigation }) {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <AppCard
            title={item.title}
            subTitle={"$" + item.price}
            image={item.image}
            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light,
  },
});

export default ListingsScreen2;
