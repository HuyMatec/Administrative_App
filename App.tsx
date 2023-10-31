import React from 'react';

import {RootNavigation} from './src/navigation';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
import {ThemeContext} from '@rneui/themed';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

const App: React.FC = () => {
  GoogleSignin.configure({
    webClientId:
      '574486458383-a0928n6m9c74nb503f7vcp3lqj0lldvs.apps.googleusercontent.com',
  });
  return (
    <Provider store={store}>
      <RootNavigation />
    </Provider>
  );
};

export default App;
