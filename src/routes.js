import React,{useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CustomNavigationBar from './componets/custom-navigation-bar';
import Login from './views/login';

const Stack = createNativeStackNavigator();


function Routes(props) {
  useEffect(()=>{
    console.log(props)
  },[])
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login"
        screenOptions={{
            header:(props)=><CustomNavigationBar {...props}/>
        }}>
          <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  
  export default Routes;