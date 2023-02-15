import React, {
  FC,
  useMemo,
} from 'react';
import { View } from 'react-native';

import Text from 'src/components/Text';

import { AuthContainerType } from '../../AuthContainer.types';

import useComponentStyles from './AuthFormSwitchAction.styles';

type Props = {
  authType: AuthContainerType;
  onActionPress: () => void;
};

const AuthFormSwitchAction: FC<Props> = ({
  authType,
  onActionPress,
}) => {
  const styles = useComponentStyles();

  const descriptionText = useMemo(() => {
    switch (authType) {
      case 'signUp':
        return 'Have an account?';
      default:
        return 'Don\'t have an account?';
    }
  }, [authType]);

  const actionText = useMemo(() => {
    switch (authType) {
      case 'signUp':
        return 'Sign in!';
      default:
        return 'Sign up!';
    }
  }, [authType]);

  return (
    <View style={styles.container}>
      <Text>
        {`${descriptionText} `}

        <Text
          type="action"
          text={actionText}
          onPress={onActionPress}
        />
      </Text>
    </View>
  );
};

export default AuthFormSwitchAction;
