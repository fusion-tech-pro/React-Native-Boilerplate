import React, { FC, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import { Controller, useForm } from 'react-hook-form';

import useCurrentUser from 'src/hooks/useCurrentUser';
import authApi from 'src/api/authApi';
import errorHandler from 'src/utils/errorHandler';
import validation from 'src/validation';
import { AuthStackNavigationProp } from 'src/navigation/AuthStack';

import Screen from 'src/components/Screen';
import Input, { useInputRef } from 'src/components/Input';
import PasswordValidation from 'src/components/PasswordValidation';
import AuthContainer from '../components/AuthContainer';

import useComponentStyles from './SignUp.styles';

const SignUp: FC = () => {
  const navigation = useNavigation<AuthStackNavigationProp<'SignUp'>>();

  const { control, watch, handleSubmit } = useForm({
    defaultValues: {
      email: '',
      password: '',
      passwordConfirmation: '',
    },
    resolver: validation.signUp,
  });

  const { setUser } = useCurrentUser();
  const styles = useComponentStyles();

  const passwordRef = useInputRef();
  const confirmPasswordRef = useInputRef();

  const [isSubmitLoading, setSubmitLoading] = useState(false);

  const onSignUpPress = handleSubmit(
    async (payload) => {
      setSubmitLoading(true);

      try {
        const { user, tokens } = await authApi.signUp(payload);
        setUser(user, tokens);
      } catch (error) {
        errorHandler.logError('SIGNUP', error, { withToast: true });
      }

      setSubmitLoading(false);
    },
  );

  const onSignInPress = async () => {
    navigation.navigate('SignIn');
  };

  return (
    <Screen
      withSafeAreaTopPadding={false}
      withSafeAreaBottomPadding={false}
      withHorizontalPadding={false}
    >
      <AuthContainer
        isSubmitLoading={isSubmitLoading}
        isPasswordRulesVisible={Boolean(watch().password)}
        type="signUp"
        onSubmitPress={onSignUpPress}
        onSwitchActionPress={onSignInPress}
      >
        <Controller
          name="email"
          control={control}
          render={({
            field: { value, onChange, onBlur },
            fieldState: { error },
          }) => (
            <Input
              keyboardType="email-address"
              label="Email"
              placeholder="Input your email here"
              value={value}
              error={error?.message}
              nextInputRef={passwordRef}
              onChangeText={onChange}
              onBlur={onBlur}
            />
          )}
        />

        <Controller
          name="password"
          control={control}
          render={({
            field: { value, onChange, onBlur },
            fieldState: { error },
          }) => (
            <Input
              secureTextEntry
              textContentType="oneTimeCode"
              label="Password"
              placeholder="Input your password here"
              containerStyle={styles.passwordInput}
              value={value}
              error={error?.message}
              inputRef={passwordRef}
              nextInputRef={confirmPasswordRef}
              onChangeText={onChange}
              onBlur={onBlur}
            />
          )}
        />

        <PasswordValidation
          password={watch().password}
          passwordConfirmation={watch().passwordConfirmation}
        />

        <Controller
          name="passwordConfirmation"
          control={control}
          render={({
            field: { value, onChange, onBlur },
            fieldState: { error },
          }) => (
            <Input
              secureTextEntry
              label="Confirm Password"
              placeholder="Input your password here"
              containerStyle={styles.passwordInput}
              value={value}
              error={error?.message}
              inputRef={confirmPasswordRef}
              onChangeText={onChange}
              onBlur={onBlur}
              onSubmit={onSignUpPress}
            />
          )}
        />
      </AuthContainer>
    </Screen>
  );
};

export default SignUp;
