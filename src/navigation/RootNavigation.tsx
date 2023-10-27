import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {StatusBar} from 'react-native';
import {navigationRef} from './NavigationService';
import AuthNavigator from './navigators/AuthNavigator';
import AppNavigator from './navigators/AppNavigator';

const RootNavigation: React.FC = () => {
  // const enableSignIn: boolean = useSelector(getAuthEnableSignIn);

  return (
    <NavigationContainer ref={navigationRef}>
      <StatusBar animated={true} showHideTransition={'slide'} />
      {/* {enableSignIn ? <AppNavigator /> : <AuthNavigator />} */}
      <AuthNavigator />
    </NavigationContainer>
  );
};

export default RootNavigation;
