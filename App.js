import React from 'react';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import Routes from './src/routes';
import { NativeBaseProvider, extendTheme } from 'native-base';
import { UserProvider } from './src/store/UserProvider';
import { NavigationContainer } from '@react-navigation/native';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#9673EB',
    accent: '#FFFFFF',
  },
  dark: true
};

const theme2 = extendTheme({
  colors: {
    // Add new color
    primary: {
      50: '#ecfeff',
      100: '#C5E4F3',
      200: '#A2D4EC',
      300: '#7AC1E4',
      400: '#47A9DA',
      500: '#0088CC',
      600: '#007AB8',
      700: '#006BA1',
      800: '#005885',
      900: '#003F5E',
    },
    // Redefinig only one shade, rest of the color will remain same.
    amber: {
      400: '#d97706',
    },
  },
  config: {
    // Changing initialColorMode to 'dark'
    initialColorMode: 'dark',
  },
});

const App = () => {

  return (


    <UserProvider>
      <NativeBaseProvider theme={theme2}>
        <PaperProvider theme={theme}> <NavigationContainer><Routes />    </NavigationContainer></PaperProvider>
      </NativeBaseProvider>
    </UserProvider>


  );
};

export default App;
