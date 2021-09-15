import React from 'react';
import { Formik } from 'formik';

function AppForm({ initialValues, onSubmit, validationSchema, children }) {
  return (
    <Formik
      //use examples //
      // initialValues={{ email: '', password: '' }}
      // onSubmit={( values ) => console.log(touched)}
      // validationSchema={ validationSchema }
      initialValues={ initialValues }
      onSubmit={ onSubmit }
      validationSchema={ validationSchema }
    >
      { () => (
        <>
          { children }
        </>
      )}
    </Formik>
  );
}

export default AppForm;