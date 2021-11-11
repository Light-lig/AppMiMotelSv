import React from 'react'
import { Appbar, Menu } from 'react-native-paper';
import { Platform } from 'react-native';
import {useRoute} from '@react-navigation/native';
import  { useUser } from '../../store/UserProvider';

const CustomNavigationBar = ({ navigation, back }) => {
  const [visible, setVisible] = React.useState(false);
  const {dispatch, state} = useUser();
  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);
  const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';
  const route = useRoute();

  const cerrarSesion = () =>{
    dispatch({type:'UPDATE_USER',item:{user:{}}})
  }
  return (
      <Appbar.Header dark={true}  >
        {(route.name == 'Home' || route.name == 'Login') ? null : <Appbar.BackAction onPress={navigation.goBack} />}
        <Appbar.Content style={{color: '#FFFFFF', fontSize: 21}} title="Mi Motel SV" />
        {(route.name !== 'Login' && route.name !== 'Register')?<Menu
          visible={visible}
          onDismiss={closeMenu}
          anchor={
            <Appbar.Action icon={MORE_ICON} color="white" onPress={openMenu} />
          }>
          <Menu.Item icon="logout" onPress={cerrarSesion} title="Cerrar sesion" />

        </Menu>:null}
      </Appbar.Header>
    );
  }

  export default CustomNavigationBar;