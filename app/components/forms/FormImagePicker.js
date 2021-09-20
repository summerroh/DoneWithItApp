//this is a component that conbines ImageInputList and Errormessage
//similar to AppFormField
//using with Formlik
import { Formik, useFormikContext } from 'formik';
import React from 'react';

import ImageInputList from '../ImageInputList';
import ErrorMessage from './ErrorMessage';

function FormImagePicker({ name }) {
  const{ errors, setFieldValue, touched, values } = useFormikContext();
  const imageUris = values[name];

  const handleAdd = uri => {
    setFieldValue( name, [...imageUris, uri]);
  };

  const handleRemove = uri => {
    setFieldValue(name, imageUris.filter(imageUri => imageUri !== uri))
  };

  return (
    <>
      <ImageInputList 
        imageUris={ imageUris }
        onAddImage={ handleAdd }
        onRemoveImage={ handleRemove } />
      <ErrorMessage error={errors[name]} visible={touched[name]}/>

    </>
  );
}



export default FormImagePicker;