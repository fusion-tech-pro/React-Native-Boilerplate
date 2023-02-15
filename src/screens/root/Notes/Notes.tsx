import React, { FC } from 'react';
import { useNavigation } from '@react-navigation/native';

import { getRootFromTabNavigation } from 'src/utils/navigationHandler';
import { TabNavigationProp } from 'src/navigation/TabNavigator';

import Screen from 'src/components/Screen';
import Button from 'src/components/Button';
import Text from 'src/components/Text';

import useComponentStyles from './Notes.styles';

const Notes: FC = () => {
  const navigation = useNavigation<TabNavigationProp<'Notes'>>();

  const styles = useComponentStyles();

  const navigateToShowcaseScreen = () => {
    getRootFromTabNavigation(navigation).navigate('Showcase');
  };

  return (
    <Screen title="Notes" style={styles.container}>
      <Text text="Check how root navigation works:" />

      <Button
        title="Go to Showcase screen"
        variant="outlined"
        style={styles.button}
        onPress={navigateToShowcaseScreen}
      />
    </Screen>
  );
};

export default Notes;
