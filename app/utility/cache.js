import AsyncStorage from '@react-native-async-storage/async-storage';
import moment from 'moment'

const prefix = 'cache';
const expiryMinutes = 5;

const store = async (key, value) => {
    try {
      const item = {
        value,
        timestamp: Date.now()
      }
      await AsyncStorage.setItem(prefix + key, JSON.stringify(item));
    } catch (error) {
      console.log(error);
    }
}

//used in get function to check if item.timestamp is expired
const isExpired = (item) => {
  const now = moment(Date.now());
  const storedTime = moment(item.timestamp);
  return now.diff(storedTime, 'minutes') > expiryMinutes;
}

const get = async (key) => {
  try {
    const value = await AsyncStorage.getItem(prefix + key);
    item = JSON.parse(value);

    //check if item exists
    if (!item) return null;

    //check if item.timestamp is expired
    if (isExpired(item)) {
      //it's violating Command Query Seperation (CQS) but it's ok because we don't want to store to much data in AsyncStorage
      await AsyncStorage.removeItem(prefix + key);
      return null;
    }

    //if item exists and not expired, return the item.value
    return item.value

  } catch (error) {
    console.log(error)
  }
}

export default {
  store,
  get
}