import React, {
  FC,
  ReactNode,
  useEffect,
  useMemo,
} from 'react';

import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {
  GestureResponderEvent,
  Pressable,
  PressableProps,
  StyleProp,
  TextStyle,
} from 'react-native';

import { TxKeyPath } from 'src/locale';

import Text from 'src/components/Text';
import IconForDefaultButton from './components/IconForDefaultButton';

import useComponentStyles from './Button.styles';

export type ButtonProps = PressableProps & {
  isLoading?: boolean;
  variant?: 'contained' | 'outlined';
  title?: string;
  titleTx?: TxKeyPath;
  textStyle?: StyleProp<TextStyle>;
  Icon?: ReactNode;
};

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

const Button: FC<ButtonProps> = (props) => {
  const {
    isLoading = false,
    variant = 'contained',
    title,
    titleTx,
    style,
    disabled,
    textStyle,
    Icon,
    onPressIn,
    onPressOut,
  } = props;

  const styles = useComponentStyles();

  const isButtonDisabled = useMemo(() => isLoading || disabled, [isLoading, disabled]);

  const disabledViewOpacityShared = useSharedValue(0);
  const buttonOpacityShared = useSharedValue(1);

  const buttonVariantStyle = useMemo(() => {
    switch (variant) {
      case 'contained':
        return styles.buttonContained;
      case 'outlined':
        return styles.buttonOutlined;
      default:
        return undefined;
    }
  }, [variant, styles]);

  const buttonDisabledVariantStyle = useMemo(() => {
    switch (variant) {
      case 'contained':
        return styles.buttonDisabled;
      case 'outlined':
        return styles.buttonDisabledOutlined;
      default:
        return undefined;
    }
  }, [variant, styles]);

  const titleVariantStyle = useMemo(() => {
    switch (variant) {
      case 'outlined':
        return styles.titleOutlined;
      default:
        return undefined;
    }
  }, [variant, styles]);

  const titleDisabledVariantStyle = useMemo(() => {
    switch (variant) {
      case 'contained':
        return styles.titleDisabledContainedButton;
      case 'outlined':
        return styles.titleDisabledOutlinedButton;
      default:
        return undefined;
    }
  }, [variant, styles]);

  const buttonAnimatedStyle = useAnimatedStyle(() => ({
    opacity: withTiming(buttonOpacityShared.value, { duration: 200 }),
  }), []);

  const disabledViewAnimatedStyle = useAnimatedStyle(() => ({
    opacity: withTiming(disabledViewOpacityShared.value, { duration: 200 }),
  }), []);

  useEffect(() => {
    if (variant === 'contained') {
      if (isButtonDisabled) {
        disabledViewOpacityShared.value = 1;
      } else {
        disabledViewOpacityShared.value = 0;
      }
    }
  }, [isButtonDisabled]);

  const onButtonPressIn = (event: GestureResponderEvent) => {
    buttonOpacityShared.value = 0.5;
    if (onPressIn) onPressIn(event);
  };

  const onButtonPressOut = (event: GestureResponderEvent) => {
    buttonOpacityShared.value = 1;
    if (onPressOut) onPressOut(event);
  };

  return (
    <AnimatedPressable
      {...props}
      disabled={isButtonDisabled}
      style={[
        styles.button,
        buttonAnimatedStyle,
        buttonVariantStyle,
        isButtonDisabled && buttonDisabledVariantStyle,
        style,
      ]}
      onPressIn={onButtonPressIn}
      onPressOut={onButtonPressOut}
    >
      <Animated.View style={[styles.disabledBackground, disabledViewAnimatedStyle]} />

      <IconForDefaultButton
        variant={variant}
        isLoading={isLoading}
        Icon={Icon}
      />

      <Text
        text={title}
        tx={titleTx}
        style={[
          styles.title,
          titleVariantStyle,
          isButtonDisabled && titleDisabledVariantStyle,
          textStyle,
        ]}
      >
        {title}
      </Text>
    </AnimatedPressable>
  );
};

export default Button;
