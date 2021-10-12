//api client
import { create } from 'apisauce';
import cache from '../utility/cache';
import authStorage from '../auth/storage';

const client = create({
  baseURL: 'http://192.168.219.104:9000/api'
  // baseURL: 'http://192.168.100.80:9000/api'
});

//getting Authtoken from authStrage to pass it in the header of request to the server
client.addAsyncRequestTransform( async (request) => {
  const authToken = await authStorage.getToken();
  if (!authToken) return;
  request.headers["x-auth-token"] = authToken;
});

const get = client.get;
client.get = async (url, params, axiosConfig) => {
  //changing the implementation of the get method for cashe store

  // this is the original get function
  const response = await get(url, params, axiosConfig);
  
  // if we can successfully call the server, store the data in the cache
  if (response.ok) {
    cache.store(url, response.data);
    return response;
  }

  //if we cannot call the server, look for data in the cache
  const data = await cache.get(url);
  return data ? { ok: true, data } : response;
}

export default client;