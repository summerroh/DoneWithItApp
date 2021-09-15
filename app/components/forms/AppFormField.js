//similar to AppFormPicker
//used in LoginScreen
import React from 'react';
import { useFormikContext } from 'formik';

import AppTextInput from '../AppTextInput';
import ErrorMessage from './ErrorMessage';

function AppFormField({ name, ...otherProps }) {
  const{ handleChange, errors, setFieldTouched, touched } = useFormikContext();
  
  return (
    <>
    <AppTextInput 
              // autoCapitalize='none'
              // autoCorrect={false}
              // icon='email'
              // keyboardType='email-address'
              onBlur={() => setFieldTouched(name) }
              onChangeText={ handleChange(name) }
              {...otherProps}
              // placeholder='Email'
              // textContentType='emailAddress'
            />
    <ErrorMessage error={errors[name]} visible={touched[name]}/>
    </>
  );
}

export default AppFormField;