import React,{useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CustomNavigationBar from './componets/custom-navigation-bar';
import Login from './views/login';
import Home from './Views/view-ejemplo';
const Stack = createNativeStackNavigator();


function Routes(props) {
 
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login"
        screenOptions={{
            header:(props)=><CustomNavigationBar {...props}/>
        }}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  
  export default Routes;