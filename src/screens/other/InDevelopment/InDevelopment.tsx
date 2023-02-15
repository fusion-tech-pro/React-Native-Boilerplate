import React, { FC } from 'react';
import { useRoute } from '@react-navigation/native';

import Lottie from 'lottie-react-native';

import Screen from 'src/components/Screen';
import Text from 'src/components/Text';

import inDevelopmentAnimation from './in-development.json';

import useComponentStyles from './InDevelopment.styles';

const InDevelopment: FC = () => {
  const { name: screenName } = useRoute();

  const styles = useComponentStyles();

  return (
    <Screen title={screenName} style={styles.container}>
      <Lottie
        loop
        autoPlay
        resizeMode="cover"
        source={inDevelopmentAnimation}
        style={styles.developmentAnimationView}
      />

      <Text
        text="This screen is in development, but we are working on it. Thanks for your patience!"
        style={styles.description}
      />
    </Screen>
  );
};

export default InDevelopment;
