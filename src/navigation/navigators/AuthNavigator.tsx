import React from 'react';
import {routes} from '../../constants';
import {
  CardStyleInterpolators,
  StackNavigationOptions,
  createStackNavigator,
} from '@react-navigation/stack';
import {Screen} from '../../types/screen';
import {authScreen} from '../../screens/auth';

const AuthStack = createStackNavigator();

const authScreenapp: Screen[] = [...authScreen];

const screenOptions: StackNavigationOptions = {
  headerShown: false,
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
};

const AuthNavigator = () => {
  return (
    <AuthStack.Navigator
      screenOptions={screenOptions}
      initialRouteName={routes.SIGN_IN}>
      {authScreenapp.map(screen => {
        return (
          <AuthStack.Screen
            key={screen.name}
            name={screen.name}
            component={screen.component}
          />
        );
      })}
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;
