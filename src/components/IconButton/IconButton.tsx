import React, {
  FC,
  ComponentType,
  ReactElement,
} from 'react';
import { SvgProps } from 'react-native-svg';

import {
  GestureResponderEvent,
  Pressable,
  PressableProps,
  StyleProp,
  ViewStyle,
} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import typeChecker from 'src/utils/typeChecker';
import useTheme from 'src/hooks/useTheme';

import useComponentStyles from './IconButton.styles';

type IconComponent = ReactElement | ComponentType<SvgProps>;

type Props = PressableProps & {
  isAnimated?: boolean;
  style?: StyleProp<ViewStyle>;
  Icon: IconComponent;
};

const IconButton: FC<Props> = (props) => {
  const {
    style,
    Icon,
    onPressIn,
    onPressOut,
  } = props;

  const { colors } = useTheme();
  const styles = useComponentStyles();

  const backgroundOpacity = useSharedValue(0);

  const backgroundAnimatedStyle = useAnimatedStyle(() => ({
    opacity: withTiming(backgroundOpacity.value),
  }));

  const onButtonPressIn = (event: GestureResponderEvent) => {
    backgroundOpacity.value = 1;
    if (onPressIn) onPressIn(event);
  };

  const onButtonPressOut = (event: GestureResponderEvent) => {
    backgroundOpacity.value = 0;
    if (onPressOut) onPressOut(event);
  };

  return (
    <Pressable
      {...props}
      style={[styles.button, style]}
      onPressIn={onButtonPressIn}
      onPressOut={onButtonPressOut}
    >
      <Animated.View style={[styles.background, backgroundAnimatedStyle]} />

      {typeChecker.isReactNode(Icon) ? Icon : (
        <Icon fill={colors.iconDark} />
      )}
    </Pressable>
  );
};

export default IconButton;
