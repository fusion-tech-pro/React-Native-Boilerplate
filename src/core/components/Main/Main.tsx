import React, { FC, useEffect, useState } from 'react';
import 'react-native-gesture-handler';

import { View } from 'react-native';

import useCurrentUser from 'src/hooks/useCurrentUser';
import useTheme from 'src/hooks/useTheme';
import Storage from 'src/utils/Storage';

import Navigation from 'src/navigation';

import useComponentStyles from './Main.styles';

const Main: FC = () => {
  const styles = useComponentStyles();

  const { getUser } = useCurrentUser();
  const { setNewColorTheme } = useTheme();

  const [isAppLoading, setAppLoading] = useState(true);

  useEffect(() => {
    initMain();
  }, []);

  const initMain = async () => {
    getUser();

    const activeColorTheme = await Storage.activeColorTheme.get();
    if (activeColorTheme) {
      setNewColorTheme(activeColorTheme);
    }

    setAppLoading(false);
  };

  if (isAppLoading) return null;

  return (
    <View style={styles.container}>
      <Navigation />
    </View>
  );
};

export default Main;
