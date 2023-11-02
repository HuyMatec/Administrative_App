import {routes} from '../../constants';
import {Contacts, Histories, Home, Settings} from '../../screens/main';
import {
  BottomTabBarProps,
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {Icon} from '@rneui/base';
import {Text, makeStyles, normalize} from '@rneui/themed';
import React, {FunctionComponent} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {NavigationService} from '../NavigationService';

const BottomTabs = createBottomTabNavigator();

const screenOptions: BottomTabNavigationOptions = {
  headerShown: false,
  tabBarShowLabel: true,
};

const choseIcon = (route: routes) => {
  switch (route) {
    case routes.HOME:
      return 'home-sharp';
    case routes.HISTORIES:
      return 'refresh-sharp';
    case routes.CONTACTS:
      return 'call-sharp';
    case routes.SETTINGS:
      return 'settings-sharp';
    default:
      return 'home-sharp';
  }
};

const useStyles = makeStyles(() => ({
  container: {
    flexDirection: 'row',
    height: normalize(56),
    justifyContent: 'space-around',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 5,
  },
  box: {
    flex: 1,
    width: normalize(56),
    height: normalize(56),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
}));

const BottomNavigator: FunctionComponent = () => {
  const styles = useStyles();
  const Tab = ({navigation, descriptors, state}: BottomTabBarProps) => {
    return (
      <View style={styles.container}>
        {state.routes.map((route, index) => {
          const {options} = descriptors[route.key];
          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });
            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate({
                name: route.name,
                merge: true,
              } as any);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          return (
            <TouchableOpacity
              key={index}
              accessibilityRole="button"
              accessibilityState={isFocused ? {selected: true} : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={styles.box}>
              <Icon
                name={choseIcon(route.name as routes)}
                type="ionicon"
                color={isFocused ? '#2D5381' : '#a6a6a6'}
                size={24}
              />

              <Text
                style={{
                  color: isFocused ? '#2D5381' : '#a6a6a6',
                  fontSize: 10,
                  marginTop: 1,
                  textTransform: 'none',
                }}>
                {route.name}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  return (
    <BottomTabs.Navigator
      screenOptions={screenOptions}
      tabBar={(props: BottomTabBarProps) => <Tab {...props} />}>
      <BottomTabs.Screen name={routes.HOME} component={Home} />
      <BottomTabs.Screen name={routes.HISTORIES} component={Histories} />
      <BottomTabs.Screen name={routes.CONTACTS} component={Contacts} />
      <BottomTabs.Screen name={routes.SETTINGS} component={Settings} />
    </BottomTabs.Navigator>
  );
};

export default BottomNavigator;
