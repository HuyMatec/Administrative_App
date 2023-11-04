import {GoogleSignin} from '@react-native-google-signin/google-signin';
import React from 'react';
import {Provider} from 'react-redux';
import {Loading} from './src/components';
import {RootNavigation} from './src/navigation';
import {store} from './src/redux/store';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const App: React.FC = () => {
  GoogleSignin.configure({
    webClientId:
      '574486458383-a0928n6m9c74nb503f7vcp3lqj0lldvs.apps.googleusercontent.com',
  });
  return (
    <SafeAreaProvider
      initialMetrics={{
        frame: {x: 0, y: 0, width: 0, height: 0},
        insets: {top: 0, left: 0, right: 0, bottom: 0},
      }}>
      <Provider store={store}>
        <GestureHandlerRootView style={{flex: 1}}>
          <Loading />
          <RootNavigation />
        </GestureHandlerRootView>
      </Provider>
    </SafeAreaProvider>
  );
};

export default App;
