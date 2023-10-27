import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {RootNavigation} from './src/navigation';
import {ThemeContext} from '@rneui/themed';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Home} from './src/screens/main';
import SignInScreen from './src/screens/auth/sign-in';
import {View} from 'react-native';

const App: React.FC = () => {
  return <RootNavigation />;
};

export default App;
