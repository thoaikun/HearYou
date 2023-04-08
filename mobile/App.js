import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import React from 'react';
import TabNavigator from './src/navigation/navigation';
import LoginScreen from './src/screens/LoginScreen';
import MusicPlayer from './src/screens/MusicPlayer';

const LightTheme = {
  dark: false,
  colors: {
    ...DefaultTheme.colors,
    background: 'white',
  },
};

export default function App() {
  const [login, setLogin] = React.useState(false);

  return (
    <>
      {login ? (
        <NavigationContainer theme={LightTheme}>
          <TabNavigator />
        </NavigationContainer>
      ) : (
        <MusicPlayer />
      )}
    </>
  );
}
