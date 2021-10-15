import React from 'react';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import Routes from './src/routes';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#9673EB',
    accent  : '#FFFFFF',
  },
  dark:true
};



const App = () => {
  
  return (
    <PaperProvider theme={theme}><Routes /></PaperProvider>
  );
};

export default App;
