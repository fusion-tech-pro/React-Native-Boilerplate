import React, { FC } from 'react';
import { NavigationProp } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Showcase from 'src/screens/root/Showcase';
import TabNavigator from './TabNavigator';

export type RootStackParamList = {
  TabNavigator: undefined;
  Showcase: undefined;
};

export type RootNavigationProp<T extends keyof RootStackParamList> =
  NavigationProp<RootStackParamList, T>;

const RootStack: FC = () => {
  const { Navigator, Screen } = createStackNavigator();

  return (
    <Navigator id="root" screenOptions={{ headerShown: false }}>
      <Screen
        name="TabNavigator"
        component={TabNavigator}
      />

      <Screen
        name="Showcase"
        component={Showcase}
      />
    </Navigator>
  );
};

export default RootStack;
