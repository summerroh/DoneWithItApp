//similar to AppFormField
import React from 'react';
import { useFormikContext } from 'formik';

import AppPicker from '../AppPicker';
import ErrorMessage from './ErrorMessage';

function AppFormPicker({ name, items, placeholder }) {
  const{ errors, setFieldValue, touched, values } = useFormikContext();

  return (
    <>
      <AppPicker
        items={items}
        onSelectItem={(item) => setFieldValue(name, item) }
        placeholder={placeholder}
        selectedItem={values[name]}
      >
      <ErrorMessage error={errors[name]} visible={touched[name]}/>

      </AppPicker>
    </>
  );
}

export default AppFormPicker;