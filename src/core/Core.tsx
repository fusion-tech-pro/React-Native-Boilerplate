import 'src/locale/i18n';

import React, { FC } from 'react';
import 'react-native-gesture-handler';

import { initialWindowMetrics, SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { NotifierWrapper } from 'react-native-notifier';

import store from '../store';

import SplashScreen from './components/SplashScreen';
import Main from './components/Main';

const Core: FC = () => {
  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <Provider store={store}>
        <NotifierWrapper>
          <Main />

          <SplashScreen />
        </NotifierWrapper>
      </Provider>
    </SafeAreaProvider>
  );
};

export default Core;
