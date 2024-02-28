import React, { FC, PropsWithChildren, useMemo } from 'react';

import { ScrollView, View } from 'react-native';
import Animated from 'react-native-reanimated';

import useTheme from 'src/hooks/useTheme';
import useKeyboard from 'src/hooks/useKeyboard';

import Text from 'src/components/Text';
import Button from 'src/components/Button';
import AuthFormSwitchAction from './components/AuthFormSwitchAction';

import { AuthContainerType } from './AuthContainer.types';
import useAuthContainer from './AuthContainer.hook';
import useComponentStyles from './AuthContainer.styles';

type Props = {
  isSubmitLoading?: boolean;
  isPasswordRulesVisible?: boolean;
  type: AuthContainerType;
  onSubmitPress: () => void;
  onForgotPasswordPress?: () => void;
  onSwitchActionPress: () => void;
};

const AuthContainer: FC<PropsWithChildren<Props>> = ({
  isSubmitLoading,
  isPasswordRulesVisible = false,
  type,
  children,
  onSubmitPress,
  onForgotPasswordPress,
  onSwitchActionPress,
}) => {
  const { isKeyboardOpened } = useKeyboard({ isAvoidEnabled: false });

  const { colors } = useTheme();
  const styles = useComponentStyles();

  const {
    titleText,
    descriptionText,
    submitButtonText,
    Icon,
  } = useAuthContainer(type);

  const isContentScrollable = useMemo(() => {
    return isKeyboardOpened || isPasswordRulesVisible;
  }, [isKeyboardOpened, isPasswordRulesVisible]);

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator
        bounces={isContentScrollable}
        keyboardShouldPersistTaps="handled"
        style={styles.scrollContainer}
        contentContainerStyle={[
          styles.scrollContent,
          isContentScrollable && styles.scrollContentScrollable,
        ]}
      >
        <Animated.View style={styles.form}>
          <Animated.View>
            <Icon
              width={80}
              height={80}
              fill={colors.primary}
            />
          </Animated.View>

          <Text
            text={titleText}
            type="header"
            style={styles.title}
          />

          <Text
            text={descriptionText}
            type="inattentive"
            style={styles.description}
          />

          {children}

          <Button
            isLoading={isSubmitLoading}
            title={submitButtonText}
            style={styles.submitButton}
            onPress={onSubmitPress}
          />

          {onForgotPasswordPress && (
            <Text
              type="action"
              text="Forgot Password?"
              style={styles.forgotPasswordText}
              onPress={onForgotPasswordPress}
            />
          )}

          <AuthFormSwitchAction
            authType={type}
            onActionPress={onSwitchActionPress}
          />
        </Animated.View>
      </ScrollView>
    </View>
  );
};

export default AuthContainer;
