import React, { ComponentType, FC, ReactElement } from 'react';
import { SvgProps } from 'react-native-svg';

import { View } from 'react-native';

import typeChecker from 'src/utils/typeChecker';
import useTheme from 'src/hooks/useTheme';

import IconButton from 'src/components/IconButton';
import VisibilityOnIcon from 'src/assets/icons/visibility-on.svg';
import VisibilityOffIcon from 'src/assets/icons/visibility-off.svg';

import useComponentStyles from './InputRightIcon.styles';

type Props = {
  isPasswordIcon?: boolean;
  isPasswordVisible?: boolean;
  Icon?: ReactElement | ComponentType<SvgProps>;
  onPasswordVisibilityChange: () => void;
}

const InputRightIcon: FC<Props> = ({
  isPasswordIcon,
  isPasswordVisible,
  Icon,
  onPasswordVisibilityChange,
}) => {
  const { colors } = useTheme();
  const styles = useComponentStyles();

  if (Icon || isPasswordIcon) {
    return (
      <View style={styles.container}>
        {Icon ?
          typeChecker.isReactNode(Icon) ? Icon : (
            <Icon fill={colors.primary} />
          ) : (
            <IconButton
              Icon={isPasswordVisible ? VisibilityOffIcon : VisibilityOnIcon}
              onPress={onPasswordVisibilityChange}
            />
          )}
      </View>
    );
  }

  return null;
};

export default InputRightIcon;
