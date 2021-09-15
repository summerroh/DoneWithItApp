import React from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";

import Screen from "../components/Screen";
import {
  AppForm as Form,
  AppFormField as FormField,
  SubmitButton,
  AppFormPicker as FormPicker
} from "../components/forms";
import AppPicker from "../components/AppPicker";
import CategoryPickerItem from "../components/CategoryPickerItem";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1, 'Too Short!').label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label('Category'),
});

const categories = [
  {
    label: 'Furniture',
    name: 'floor-lamp',
    backgroundColor: '#fc5c65',
    value: 1
  },
  {
    label: 'Cars',
    name: 'car',
    backgroundColor: '#fd9644',
    value: 2
  },
  {
    label: 'Cameras',
    name: 'camera',
    backgroundColor: '#fed330',
    value: 3
  },
  {
    label: 'Games',
    name: 'cards',
    backgroundColor: '#26de81',
    value: 4
  },
  {
    label: 'Clothing',
    name: 'shoe-heel',
    backgroundColor: '#2bcbba',
    value: 5
  },
  {
    label: 'Sports',
    name: 'basketball',
    backgroundColor: '#45aaf2',
    value: 6
  },
  {
    label: 'Movies & Music',
    name: 'headphones',
    backgroundColor: '#4b7bec',
    value: 7
  },
  {
    label: 'Books',
    name: 'book',
    backgroundColor: 'dodgerblue',
    value: 8
  },
  {
    label: 'Other',
    name: 'dog',
    backgroundColor: 'gray',
    value: 9
  },
]

function ListingEditScreen() {
  return (
    <Screen style={styles.container}>
      <Form
        initialValues={{ title: "", price: "", description: "", category: null, }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <FormField
          maxLength={255}
          name="title"
          placeholder="Title"
        />
        <FormField
          keyboardType="numeric"
          maxLength={8} //10000.99
          name="price"
          placeholder="Price"
          width='40%'
        />
        <FormPicker 
          name="category"
          placeholder="Category"
          items={categories}
          width='60%'
          PickerItemComponent={CategoryPickerItem}
          numberOfColumns={3}
        />
        <FormField
          maxLength={255}
          multiline
          numberOfLines={3}
          name="description"
          placeholder="Description"
        />
        <SubmitButton title="POST" />
      </Form>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default ListingEditScreen;
