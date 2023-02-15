import { useMemo } from 'react';

import SignInIcon from 'src/assets/icons/sign-in.svg';
import SignUpIcon from 'src/assets/icons/sign-up.svg';

import { AuthContainerType } from './AuthContainer.types';

const useAuthContainer = (type: AuthContainerType) => {
  const titleText = useMemo(() => {
    switch (type) {
      case 'signUp':
        return 'Create Account';
      default:
        return 'Welcome to React Native Boilerplate!';
    }
  }, [type]);

  const descriptionText = useMemo(() => {
    switch (type) {
      case 'signUp':
        return 'Let\'s get started';
      default:
        return 'Let\'s see how it works';
    }
  }, [type]);

  const submitButtonText = useMemo(() => {
    switch (type) {
      case 'signUp':
        return 'Sign up';
      default:
        return 'Sign in';
    }
  }, [type]);

  const Icon = useMemo(() => {
    switch (type) {
      case 'signUp':
        return SignUpIcon;
      default:
        return SignInIcon;
    }
  }, [type]);

  return {
    titleText,
    descriptionText,
    submitButtonText,
    Icon,
  };
};

export default useAuthContainer;
