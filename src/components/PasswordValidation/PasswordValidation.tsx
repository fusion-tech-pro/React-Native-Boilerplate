import React, {
  FC,
  useEffect,
  useMemo,
  useState,
} from 'react';

import { View } from 'react-native';
import Animated, { LightSpeedInLeft } from 'react-native-reanimated';

import useTheme from 'src/hooks/useTheme';
import { wp } from 'src/utils/responsive';

import CircleCheckmarkIcon from 'src/assets/icons/circle-checkmark.svg';
import Text from '../Text';

import { validatePassword } from './PasswordValidation.utils';
import useComponentStyles from './PasswordValidation.styles';

type Props = {
  password: string;
  passwordConfirmation: string;
  onValidationResultChange?: (isValidationPassed: boolean) => void;
};

const PasswordValidation: FC<Props> = ({
  password,
  passwordConfirmation,
  onValidationResultChange = () => null,
}) => {
  const { colors } = useTheme();

  const styles = useComponentStyles();

  const [isValidationPassed, setValidationPass] = useState(false);

  const validationResult = useMemo(() => {
    const validationResultObj = validatePassword(password, passwordConfirmation);
    setValidationPass(validationResultObj.every((rule) => rule.checked));
    return validationResultObj;
  }, [password, passwordConfirmation]);

  useEffect(() => {
    onValidationResultChange(isValidationPassed);
  }, [isValidationPassed]);

  if (!password) return null;

  return (
    <Animated.View
      entering={LightSpeedInLeft}
      style={styles.container}
    >
      {validationResult.map((rule) => (
        <View key={rule.key} style={styles.ruleContainer}>
          <CircleCheckmarkIcon
            fill={rule.checked ? colors.success : colors.disabled}
            width={wp(12)}
            height={wp(12)}
          />

          <Text
            text={rule.description}
            style={[styles.ruleDescription, !rule.checked && styles.ruleDescriptionUnchecked]}
          />
        </View>
      ))}
    </Animated.View>
  );
};

export default PasswordValidation;
