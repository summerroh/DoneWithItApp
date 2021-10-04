// responsible for storing and retreive the user's authentification token
import * as SecureStore from 'expo-secure-store';
import jwtDecode from 'jwt-decode';

const key = "authToken";

const storeToken = async authToken => {
  try {
    await SecureStore.setItemAsync(key, authToken)
  } catch (error) {
    console.log('Error storing the auth tocken', error)
  }
};

const getToken =  async () => {
  try {
    return await SecureStore.getItemAsync(key);
  } catch (error) {
    console.log('Error getting the auth token', error)
  }
};

const getUser = async () => {
  const token = await getToken();
  return (token) ? jwtDecode(token) : null;
};

//when the use logs out
const removeToken = async () => {
  try {
    await SecureStore.deleteItemAsync(key);
  } catch (error) {
    console.log('Error removing the auth token', error);
  }
};

export default { storeToken, getUser, removeToken };