import React, { FC, ReactNode, useMemo } from 'react';
import { useNavigation } from '@react-navigation/native';

import { StyleProp, View, ViewStyle } from 'react-native';

import { TxKeyPath } from 'src/locale/translate';

import ArrowRight from 'src/assets/icons/arrow-right.svg';
import IconButton from '../IconButton';
import Text from '../Text';

import useComponentStyles from './Header.styles';

type Props = {
  withBackButton?: boolean;
  title?: string;
  titleTx?: TxKeyPath;
  style?: StyleProp<ViewStyle>;
  RightIcon?: ReactNode;
}
const Header: FC<Props> = ({
  withBackButton: withBackButtonProp,
  title,
  titleTx,
  style,
  RightIcon,
}) => {
  const styles = useComponentStyles();

  const navigation = useNavigation();

  const withBackButton = useMemo(() => {
    if ((!onBackButtonPress && !navigation.canGoBack()) || navigation.getState().type === 'tab') {
      return false;
    }

    return true;
  }, [withBackButtonProp, navigation]);

  const onBackButtonPress = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    }
  };

  return (
    <View style={[styles.container, style]}>
      <View style={styles.leftContent}>
        {withBackButton && (
          <IconButton
            Icon={ArrowRight}
            onPress={onBackButtonPress}
          />
        )}
      </View>

      <Text
        type="header"
        text={title}
        tx={titleTx}
        style={styles.title}
      />

      <View style={styles.rightContent}>
        {RightIcon}
      </View>
    </View>
  );
};

export default Header;
