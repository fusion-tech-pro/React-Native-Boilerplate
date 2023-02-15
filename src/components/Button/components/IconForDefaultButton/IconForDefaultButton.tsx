import React, {
  FC, ReactNode, useEffect, useMemo,
} from 'react';

import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { ActivityIndicator } from 'react-native';

import useTheme from 'src/hooks/useTheme';

import { CONTAINER_MARGIN_RIGHT, LOADER_WIDTH } from './IconForDefaultButton.constants';
import useComponentStyles from './IconForDefaultButton.styles';

type Props = {
  variant?: 'contained' | 'outlined';
  isLoading?: boolean;
  Icon?: ReactNode;
};

const IconForDefaultButton: FC<Props> = ({
  variant,
  isLoading,
  Icon,
}) => {
  const { colors } = useTheme();
  const styles = useComponentStyles();

  const containerWidthShared = useSharedValue<number>(0);
  const containerMarginRightShared = useSharedValue(0);

  const loaderColor = useMemo(() => {
    switch (variant) {
      case 'outlined':
        return colors.disabledDark;
      default:
        return colors.iconLight;
    }
  }, [variant]);

  useEffect(() => {
    // We don't need an appearance animation if there is an Icon
    if (!Icon) {
      if (isLoading) {
        containerWidthShared.value = LOADER_WIDTH;
        containerMarginRightShared.value = CONTAINER_MARGIN_RIGHT;
      } else {
        containerWidthShared.value = 0;
        containerMarginRightShared.value = 0;
      }
    }
  }, [isLoading]);

  const containerAnimatedStyle = useAnimatedStyle(() => ({
    width: withTiming(containerWidthShared.value),
    marginRight: withTiming(containerMarginRightShared.value),
  }));

  return (
    // We don't need an appearance animation if there is an Icon
    <Animated.View style={Icon ? styles.container : containerAnimatedStyle}>
      {isLoading ? (
        <ActivityIndicator color={loaderColor} />
      ) : Icon}
    </Animated.View>
  );
};

export default IconForDefaultButton;
