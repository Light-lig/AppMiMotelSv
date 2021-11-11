import React,{useEffect} from 'react'
import { storeData, getData } from '../utils/utils';
const UserContext = React.createContext(null);

var inicialState = {user:{}, paymethod:{}};
function userReducer(state, action) {
  switch (action.type) {
    case "UPDATE_USER":
        storeData('user',JSON.stringify(action.item))
        return action.item;
    default:
        return state;
  }
}

 function UserProvider({children}) {
  const [state, dispatch] = React.useReducer(userReducer, inicialState)
  useEffect(()=>{
    getData('user').then(result => { 
      if(result !== null){
        dispatch({type:'UPDATE_USER',item:JSON.parse(result)})
      }
    });
  },[])
 

  const value = {state, dispatch}
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

function useUser() {
  const context = React.useContext(UserContext)
  if (context === undefined) {
    throw new Error('userConext must be used within a UserProvider')
  }
  return context
}

export {UserProvider, useUser}
