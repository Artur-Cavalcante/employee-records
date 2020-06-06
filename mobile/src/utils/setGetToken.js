import * as SecureStore from 'expo-secure-store';

const setGetToken = async (key, value) => {

  let json = ''

  if (value) {
    SecureStore.setItemAsync(key, value)
  }
  else {
    json = await SecureStore.getItemAsync(key)
    return json;
  }

};

export default setGetToken;