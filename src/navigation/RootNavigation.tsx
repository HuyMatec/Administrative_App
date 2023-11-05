import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {StatusBar} from 'react-native';
import {useAppSelector} from '../hooks';
import {getAuthEnableSignIn} from '../redux/selectors/auth.selector';
import {navigationRef} from './NavigationService';
import AppNavigator from './navigators/AppNavigator';
import AuthNavigator from './navigators/AuthNavigator';

const RootNavigation: React.FC = () => {
  const enableSignIn: boolean = useAppSelector(getAuthEnableSignIn);

  return (
    <NavigationContainer ref={navigationRef}>
      <StatusBar animated={true} showHideTransition={'slide'} />
      {enableSignIn === true ? <AppNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default RootNavigation;
