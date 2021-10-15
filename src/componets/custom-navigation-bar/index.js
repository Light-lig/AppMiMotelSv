import React from 'react'
import { Appbar } from 'react-native-paper';
const CustomNavigationBar = ({ navigation, back }) => {
  
    return (
      <Appbar.Header dark={true}  >
        {back ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
        <Appbar.Content style={{color: '#FFFFFF', fontSize: 21}} title="Mi Motel SV" />
    
      </Appbar.Header>
    );
  }

  export default CustomNavigationBar;