import {Screen} from '../../types/screen';
import {
  CardStyleInterpolators,
  StackNavigationOptions,
  createStackNavigator,
} from '@react-navigation/stack';
import React from 'react';
import {routes} from '../../constants';
import {
  contactsScreens,
  historiesScreens,
  homeScreens,
  settingsScreens,
} from '../../screens/main';
import BottomNavigator from './BottomNavigator';

const AppStack = createStackNavigator();

const screenOption: StackNavigationOptions = {
  headerShown: false,
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
};

const mainScreens: Screen[] = [
  {
    name: routes.BOTTOM_TAB,
    component: BottomNavigator,
  },
  ...homeScreens,
  ...historiesScreens,
  ...contactsScreens,
  ...settingsScreens,
];

const AppNavigator = () => {
  return (
    <AppStack.Navigator screenOptions={screenOption}>
      {mainScreens.map((screen: Screen) => {
        return (
          <AppStack.Screen
            key={screen.name}
            name={screen.name}
            component={screen.component}
          />
        );
      })}
    </AppStack.Navigator>
  );
};

export default AppNavigator;
