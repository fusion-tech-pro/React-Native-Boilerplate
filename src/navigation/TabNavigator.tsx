import React, { FC } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationProp } from '@react-navigation/native';

import InDevelopment from 'src/screens/other/InDevelopment';
import Home from 'src/screens/root/Home';
import Profile from 'src/screens/root/Profile';
import Notes from 'src/screens/root/Notes';

import TabBar from 'src/components/TabBar';

export type TabNavigatorParamList = {
  Home: undefined;
  Notes: undefined;
  Notifications: undefined;
  Profile: undefined;
};

export type TabNavigationProp<T extends keyof TabNavigatorParamList> =
  NavigationProp<TabNavigatorParamList, T>;

const TabNavigator: FC = () => {
  const { Navigator, Screen } = createBottomTabNavigator<TabNavigatorParamList>();

  return (
    <Navigator
      screenOptions={{ headerShown: false }}
      tabBar={(props) => <TabBar {...props} />}
    >
      <Screen
        name="Home"
        component={Home}
      />
      <Screen
        name="Notes"
        component={Notes}
      />
      <Screen
        name="Notifications"
        component={InDevelopment}
      />
      <Screen
        name="Profile"
        component={Profile}
      />
    </Navigator>
  );
};

export default TabNavigator;
