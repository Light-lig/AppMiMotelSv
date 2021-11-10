import AsyncStorage from '@react-native-async-storage/async-storage'; 
export const storeData = async (item,value) => {
    try {
      await AsyncStorage.setItem(item, value)
    } catch (e) {
      console.log(e)
    }
  } 


export 
const getData = async (item) => {
  var value = '';
  try {
     value = await AsyncStorage.getItem(item);
    if(value !== null) {
      return value;
    }
  } catch(e) {
    console.log(e)
  }
  return value;
} 

export const getRating =(rating) =>{
   var cantidad = rating.length;
   let total = 0.0;
   let suma = 0.0;
   const reducer = (total,c) => total+ c.valValoracion;
   if(cantidad > 0){
    suma = rating.reduce(reducer,0);
    total = suma/cantidad;
   }
 
   return total;
}