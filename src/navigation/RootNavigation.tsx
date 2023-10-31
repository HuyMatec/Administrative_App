import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {StatusBar} from 'react-native';
import {useSelector} from 'react-redux';
import {getAuthEnableSignIn} from '../redux/selectors/auth.selector';
import {NavigationService, navigationRef} from './NavigationService';
import AppNavigator from './navigators/AppNavigator';
import AuthNavigator from './navigators/AuthNavigator';
import {useAppSelector} from '../hooks';

const RootNavigation: React.FC = () => {
  const enableSignIn: boolean = useAppSelector(getAuthEnableSignIn);

  return (
    <NavigationContainer ref={navigationRef}>
      <StatusBar animated={true} showHideTransition={'slide'} />
      {enableSignIn ? <AppNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default RootNavigation;
