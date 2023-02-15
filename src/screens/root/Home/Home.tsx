import React, { FC } from 'react';
import { useNavigation } from '@react-navigation/native';

import { getRootFromTabNavigation } from 'src/utils/navigationHandler';
import { TabNavigationProp } from 'src/navigation/TabNavigator';
import toast from 'src/utils/toast';

import Screen from 'src/components/Screen';
import Button from 'src/components/Button';
import Text from 'src/components/Text';

import useComponentStyles from './Home.styles';

const Home: FC = () => {
  const navigation = useNavigation<TabNavigationProp<'Home'>>();

  const styles = useComponentStyles();

  const navigateToShowcaseScreen = () => {
    getRootFromTabNavigation(navigation).navigate('Showcase');
  };

  const onShowToastPress = () => {
    toast.showErrorMessage('Test error message');
  };

  return (
    <Screen title="Home">
      <Text tx="homeScreen.localizedFeatureDescription" />

      <Text text="Check how root navigation works:" style={styles.label} />

      <Button
        title="Go to Showcase screen"
        variant="outlined"
        style={styles.button}
        onPress={navigateToShowcaseScreen}
      />

      <Text text="Check how toast works:" style={styles.label} />

      <Button
        title="Show error toast"
        variant="outlined"
        style={styles.button}
        onPress={onShowToastPress}
      />
    </Screen>
  );
};

export default Home;
