import React, { useState } from 'react';
import { Image, StyleSheet } from 'react-native';
import * as Yup from 'yup';

import Screen from '../components/Screen';
import { AppForm, AppFormField, SubmitButton, ErrorMessage } from '../components/forms';
import authApi from '../api/auth';
import useAuth from '../auth/useAuth';

//validation schema is an object that determines all the rules for validating our form
const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).label('password')
});

function LoginScreen() {
  const auth = useAuth();
  const [loginFailed, setLoginFailed] = useState(false);

  handleSubmit = async ({ email, password }) => {
    const result = await authApi.login(email, password)
    if (!result.ok) return setLoginFailed(true)
    //login successful
    setLoginFailed(false);
    auth.logIn(result.data);
  };

  return (
    <Screen style={styles.container}>
      <Image 
        style={styles.logo}
        source={require('../assets/logo-red.png')} />
      
      <AppForm
        initialValues={{ email: '', password: '' }}
        onSubmit={handleSubmit}
        validationSchema={ validationSchema }
      >
        <ErrorMessage error='Invalid email and/or password.' visible={loginFailed}/>
        <AppFormField 
          autoCapitalize='none'
          autoCorrect={false}
          icon='email'
          keyboardType='email-address'

          placeholder='Email'
          textContentType='emailAddress'
          name='email'
        />
        
        <AppFormField 
          autoCapitalize='none'
          autoCorrect={false}
          icon='lock'

          placeholder='Password'
          secureTextEntry
          textContentType='password'
          name='password'
        />

        <SubmitButton title='Login'/>

        {/* <AppButton 
          title='Login'
          onPress={ handleSubmit }
          /> */}

      </AppForm>

      
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginTop: 50,
    marginBottom: 20,
  }
})

export default LoginScreen;