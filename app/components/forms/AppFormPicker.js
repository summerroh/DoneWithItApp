//this is a component that conbines AppPicker and Errormessage
//similar to AppFormField
import React from 'react';
import { useFormikContext } from 'formik';

import AppPicker from '../AppPicker';
import ErrorMessage from './ErrorMessage';

function AppFormPicker({ name, items, placeholder, width, numberOfColumns, PickerItemComponent }) {
  const{ errors, setFieldValue, touched, values } = useFormikContext();

  return (
    <>
      <AppPicker
        items={items}
        onSelectItem={(item) => setFieldValue(name, item) }
        PickerItemComponent={PickerItemComponent}
        placeholder={placeholder}
        selectedItem={values[name]}
        width={width}
        numberOfColumns={numberOfColumns}
      >
      <ErrorMessage error={errors[name]} visible={touched[name]}/>

      </AppPicker>
    </>
  );
}

export default AppFormPicker;