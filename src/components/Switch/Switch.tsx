import React, { FC } from 'react';

import {
  View,
  Switch as RNSwitch,
  SwitchProps,
  StyleProp,
  ViewStyle,
} from 'react-native';

import useTheme from 'src/hooks/useTheme';

import Text from 'src/components/Text';

import useComponentStyles from './Switch.styles';

type Props = SwitchProps & {
  title?: string;
  containerStyle?: StyleProp<ViewStyle>;
};

const Switch: FC<Props> = (props) => {
  const { title, containerStyle } = props;

  const { colors } = useTheme();
  const styles = useComponentStyles();

  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={styles.title}>{title}</Text>

      <RNSwitch
        trackColor={{ false: colors.disabled, true: colors.primary }}
        thumbColor={colors.iconLight}
        ios_backgroundColor={colors.disabled}
        {...props}
      />
    </View>
  );
};

export default Switch;
