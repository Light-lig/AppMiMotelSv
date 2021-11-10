import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

 async function  useSession(){
  let loggedIn = false;
  try {
    let user = await AsyncStorage.getItem('user');
    if(user !== null){
        loggedIn = true;
    }
   } catch (error) {
    console.log(error)
  }
  return loggedIn;
}

export default useSession;
