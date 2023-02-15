import React, {
  ComponentType,
  FC,
  ReactElement,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { SvgProps } from 'react-native-svg';

import {
  View,
  ViewStyle,
  StyleProp,
  TextInput,
  TextStyle,
  NativeSyntheticEvent,
  TextInputFocusEventData,
  TextInputProps,
  ReturnKeyTypeOptions,
} from 'react-native';
import Animated, {
  FadeInLeft,
  FadeOutRight,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import useTheme from 'src/hooks/useTheme';
import typeChecker from 'src/utils/typeChecker';
import { TxKeyPath } from 'src/locale';

import Text from '../Text';
import InputRightIcon from './components/InputRightIcon';

import useInputRefHook, { InputRef } from './Input.hook';
import useComponentStyles from './Input.styles';

export const useInputRef = useInputRefHook;

export type InputProps = TextInputProps & {
  lengthToSubmit?: number;
  label?: string;
  labelTx?: TxKeyPath;
  error?: string;
  errorTx?: TxKeyPath;
  inputRef?: InputRef,
  nextInputRef?: InputRef,
  containerStyle?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
  inputStyle?: StyleProp<ViewStyle & TextStyle>;
  errorStyle?: StyleProp<TextStyle>;
  IconLeft?: ReactElement | ComponentType<SvgProps>;
  IconRight?: ReactElement | ComponentType<SvgProps>;
  onSubmit?: () => void;
};

const Input: FC<InputProps> = (props: InputProps) => {
  const styles = useComponentStyles();
  const { colors } = useTheme();

  const [isFocused, setFocused] = useState(false);
  const [isPasswordVisible, setPasswordVisible] = useState(false);

  const {
    secureTextEntry,
    lengthToSubmit,
    label,
    labelTx,
    error,
    errorTx,
    inputRef,
    nextInputRef,
    containerStyle,
    labelStyle,
    inputStyle,
    errorStyle,
    IconLeft,
    IconRight,
    onFocus = () => null,
    onBlur = () => null,
    onSubmit,
    onChangeText: onChangeTextCallback = () => null,
  } = props;

  const inputContainerBorderColor = useSharedValue(colors.backgroundLight);

  const isError = useMemo(() => {
    return Boolean(error);
  }, [error]);

  const returnKeyType = useMemo<ReturnKeyTypeOptions>(() => {
    if (nextInputRef !== undefined) {
      return 'next';
    }

    if (onSubmit) {
      return 'done';
    }

    return 'default';
  }, [nextInputRef, onSubmit]);

  useEffect(() => {
    if (isError) {
      inputContainerBorderColor.value = withTiming(colors.danger);
    } else {
      inputContainerBorderColor.value = withTiming(colors.backgroundLight);
    }
  }, [isError]);

  useEffect(() => {
    if (isFocused) {
      inputContainerBorderColor.value = withTiming(colors.primary);
    } else if (isError) {
      inputContainerBorderColor.value = withTiming(colors.danger);
    } else {
      inputContainerBorderColor.value = withTiming(colors.backgroundLight);
    }
  }, [isFocused]);

  const inputContainerAnimatedStyle = useAnimatedStyle(() => ({
    borderColor: inputContainerBorderColor.value,
  }), []);

  const onInputFocus = (event: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setFocused(true);
    onFocus(event);
  };

  const onInputBlur = (event: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setFocused(false);
    onBlur(event);
  };

  const onChangeText = (value: string) => {
    onChangeTextCallback(value);

    if (lengthToSubmit === value.length) {
      onInputSubmit();
    }
  };

  const onInputSubmit = () => {
    if (nextInputRef?.current) {
      nextInputRef.current.focus();
    }

    if (onSubmit) {
      onSubmit();
    }
  };

  const onPasswordVisibilityChange = () => {
    setPasswordVisible(!isPasswordVisible);
  };

  return (
    <View style={[styles.container, containerStyle]}>
      <View style={styles.topContent}>
        {Boolean(label) && (
          <Text
            text={label}
            tx={labelTx}
            style={[
              styles.label,
              isError && styles.labelError,
              labelStyle,
            ]}
          />
        )}

        {isError && (
          <Animated.View
            entering={FadeInLeft}
            exiting={FadeOutRight}
          >
            <Text
              text={error}
              tx={errorTx}
              style={[styles.error, errorStyle]}
            />
          </Animated.View>
        )}
      </View>

      <Animated.View style={[styles.inputContainer, inputContainerAnimatedStyle]}>
        {typeChecker.isReactNode(IconLeft) ? IconLeft : (
          <IconLeft fill={colors.primary} />
        )}

        <TextInput
          blurOnSubmit={!nextInputRef?.current}
          cursorColor={colors.primary}
          selectionColor={colors.primaryLight}
          placeholderTextColor={colors.textInattentive}
          autoCapitalize="none"
          returnKeyType={returnKeyType}
          {...props}
          secureTextEntry={secureTextEntry && !isPasswordVisible}
          ref={inputRef}
          style={[styles.input, inputStyle]}
          onFocus={onInputFocus}
          onBlur={onInputBlur}
          onSubmitEditing={onInputSubmit}
          onChangeText={onChangeText}
        />

        <InputRightIcon
          isPasswordIcon={secureTextEntry}
          isPasswordVisible={isPasswordVisible}
          onPasswordVisibilityChange={onPasswordVisibilityChange}
          Icon={IconRight}
        />
      </Animated.View>
    </View>
  );
};

export default Input;
