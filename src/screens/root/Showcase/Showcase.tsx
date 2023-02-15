import React, { FC } from 'react';

import Screen from 'src/components/Screen';
import Text from 'src/components/Text';

import useComponentStyles from './Showcase.styles';

const Showcase: FC = () => {
  const styles = useComponentStyles();

  return (
    <Screen title="Showcase" style={styles.container}>
      <Text text="This is Showcase screen" />
    </Screen>
  );
};

export default Showcase;
