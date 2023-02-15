import React, { FC } from 'react';

import useCurrentUser from 'src/hooks/useCurrentUser';
import useTheme from 'src/hooks/useTheme';
import Storage from 'src/utils/Storage';

import Screen from 'src/components/Screen';
import Button from 'src/components/Button';
import Switch from 'src/components/Switch';

import useComponentStyles from './Profile.styles';

const Profile: FC = () => {
  const { colorTheme, setNewColorTheme } = useTheme();

  const { removeUser } = useCurrentUser();

  const styles = useComponentStyles();

  const onDarkThemeSwitch = (isDarkTheme: boolean) => {
    const newColorTheme = isDarkTheme ? 'dark' : 'light';

    setNewColorTheme(isDarkTheme ? 'dark' : 'light');
    Storage.activeColorTheme.set(newColorTheme);
  };

  return (
    <Screen title="Profile" style={styles.container}>
      <Switch
        title="Enable dark theme"
        value={colorTheme === 'dark'}
        containerStyle={styles.themeSwitchContainer}
        onValueChange={onDarkThemeSwitch}
      />

      <Button
        title="Sign out"
        variant="outlined"
        style={styles.button}
        onPress={removeUser}
      />
    </Screen>
  );
};

export default Profile;
