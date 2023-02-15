import React, { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationProp } from '@react-navigation/native';

import SignIn from 'src/screens/auth/SignIn';
import SignUp from 'src/screens/auth/SignUp';
import InDevelopment from 'src/screens/other/InDevelopment';

export type AuthStackParamList = {
  SignIn: undefined;
  SignUp: undefined;
  ForgotPassword: undefined;
};

export type AuthStackNavigationProp<T extends keyof AuthStackParamList> =
  NavigationProp<AuthStackParamList, T>;

const AuthStack: FC = () => {
  const { Navigator, Screen } = createStackNavigator();

  return (
    <Navigator id="Auth" screenOptions={{ headerShown: false }}>
      <Screen
        name="SignIn"
        component={SignIn}
      />

      <Screen
        name="SignUp"
        component={SignUp}
      />

      <Screen
        name="ForgotPassword"
        component={InDevelopment}
      />
    </Navigator>
  );
};

export default AuthStack;
