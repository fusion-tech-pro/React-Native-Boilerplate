import React, { FC } from 'react';
import 'src/locale/i18n';
import { StyleSheet } from 'react-native';

import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { initialWindowMetrics, SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { NotifierWrapper } from 'react-native-notifier';

import store from '../store';

import SplashScreen from './components/SplashScreen';
import Main from './components/Main';

const Core: FC = () => {
  return (
    <GestureHandlerRootView style={styles.container}>
      <SafeAreaProvider initialMetrics={initialWindowMetrics}>
        <Provider store={store}>
          <NotifierWrapper>
            <Main />

            <SplashScreen />
          </NotifierWrapper>
        </Provider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Core;
