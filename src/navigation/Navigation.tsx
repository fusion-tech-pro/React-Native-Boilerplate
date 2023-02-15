import React, { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useFlipper } from '@react-navigation/devtools';

import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';

import useCurrentUser from 'src/hooks/useCurrentUser';

import RootStack from './RootStack';
import AuthStack from './AuthStack';

const { Navigator, Screen } = createStackNavigator();

export type MainNavigationParamList = {
  RootStack: undefined;
};

const Navigation: FC = () => {
  const navigationRef = useNavigationContainerRef();
  useFlipper(navigationRef);

  const { user } = useCurrentUser();

  return (
    <NavigationContainer ref={navigationRef}>
      <Navigator screenOptions={{ headerShown: false }}>
        {user ? (
          <Screen
            name="RootStack"
            component={RootStack}
          />
        ) : (
          <Screen
            name="AuthStack"
            component={AuthStack}
          />
        )}
      </Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
