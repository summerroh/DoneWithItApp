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

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1, 'Too Short!').label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label('Category'),
});

const categories = [
  {
    label: 'Furniture',
    value: 1
  },
  {
    label: 'Clothing',
    value: 2
  },
  {
    label: 'Camera',
    value: 3
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
        />
        <FormPicker 
          name="category"
          placeholder="Category"
          items={categories}
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
