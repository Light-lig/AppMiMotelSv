import React,{useEffect} from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CustomNavigationBar from './componets/custom-navigation-bar';
import Login from './views/login';
import Home from './Views/Home';
import withFooter from './HOC/withFooter';
import { useUser } from './store/UserProvider';
import CardDetalleMotel from './views/card-detalle-motel';
import Habitaciones from './views/Habitaciones'
import DetalleHabitacion from './views/DetalleHabitacion';
import { useNavigation } from '@react-navigation/native';
import Register from './views/register/';

const Stack = createNativeStackNavigator();
const config = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};

function Routes(props) {
  const navigation = useNavigation();
  const { state } = useUser();
  useEffect(()=>{
    if(state !== undefined){
      if( Object.keys(state.user).length == 0){
        navigation.navigate('Login');
      }else{
        navigation.navigate('Home');
      }
    }
  },[state])
  return (
    <>
      <Stack.Navigator
        screenOptions={{
          header: (props) => <CustomNavigationBar {...props} />
        }}>
         <Stack.Screen name="Login" component={Login} /> 
       
        <Stack.Screen name="Home" component={Home} options={{
          transitionSpec: {
            open: config,
            close: config,
          },
        }} />
        <Stack.Screen name="DetalleMotel" component={CardDetalleMotel} options={{
          transitionSpec: {
            open: config,
            close: config,
          },
        }} />
         <Stack.Screen name="Habitaciones" component={Habitaciones} options={{
          transitionSpec: {
            open: config,
            close: config,
          },
        }} />
         <Stack.Screen name="Reservar" component={DetalleHabitacion} options={{
          transitionSpec: {
            open: config,
            close: config,
          },
        }} />
                  <Stack.Screen name="Register" component={Register} options={{
          transitionSpec: {
            open: config,
            close: config,
          },
        }} />

      </Stack.Navigator>

    </>
  );
}

export default withFooter(Routes);
   
