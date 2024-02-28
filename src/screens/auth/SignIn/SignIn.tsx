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
import AuthContainer from '../components/AuthContainer';

import useComponentStyles from './SignIn.styles';

const SignIn: FC = () => {
  const navigation = useNavigation<AuthStackNavigationProp<'SignIn'>>();

  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: validation.signIn,
  });

  const { setUser } = useCurrentUser();
  const styles = useComponentStyles();

  const passwordRef = useInputRef();

  const [isSubmitLoading, setSubmitLoading] = useState(false);

  const onSignInPress = handleSubmit(
    async (payload) => {
      setSubmitLoading(true);

      try {
        const { user, tokens } = await authApi.signIn(payload);
        setUser(user, tokens);
      } catch (error) {
        errorHandler.logError('SIGNIN', error, { withToast: true });
      }

      setSubmitLoading(false);
    },
  );

  const onForgotPasswordPress = () => {
    navigation.navigate('ForgotPassword');
  };

  const onSignUpPress = async () => {
    navigation.navigate('SignUp');
  };

  return (
    <Screen
      withSafeAreaTopPadding={false}
      withSafeAreaBottomPadding={false}
      withHorizontalPadding={false}
    >
      <AuthContainer
        isSubmitLoading={isSubmitLoading}
        type="signIn"
        onSubmitPress={onSignInPress}
        onForgotPasswordPress={onForgotPasswordPress}
        onSwitchActionPress={onSignUpPress}
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
              containerStyle={styles.input}
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
              label="Password"
              placeholder="Input your password here"
              value={value}
              error={error?.message}
              inputRef={passwordRef}
              containerStyle={styles.input}
              onChangeText={onChange}
              onBlur={onBlur}
              onSubmit={onSignInPress}
            />
          )}
        />
      </AuthContainer>
    </Screen>
  );
};

export default SignIn;
