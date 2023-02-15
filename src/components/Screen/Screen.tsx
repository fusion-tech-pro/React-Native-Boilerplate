import React, { FC, PropsWithChildren } from 'react';

import { StyleProp, View, ViewStyle } from 'react-native';

import { TxKeyPath } from 'src/locale/translate';

import Header from '../Header';

import useComponentStyles from './Screen.styles';

type Props = {
  withSafeAreaTopPadding?: boolean;
  withSafeAreaBottomPadding?: boolean;
  withHorizontalPadding?: boolean;
  title?: string;
  titleTx?: TxKeyPath;
  containerStyle?: StyleProp<ViewStyle>;
  style?: StyleProp<ViewStyle>;
};

const Screen: FC<PropsWithChildren<Props>> = ({
  withSafeAreaTopPadding = true,
  withSafeAreaBottomPadding = true,
  withHorizontalPadding = true,
  title,
  titleTx,
  containerStyle,
  style,
  children,
}) => {
  const styles = useComponentStyles({
    withSafeAreaTopPadding,
    withSafeAreaBottomPadding,
    withHorizontalPadding,
    withHeader: Boolean(title),
  });

  return (
    <View style={[styles.container, containerStyle]}>
      {Boolean(title || titleTx) && (
        <Header
          title={title}
          titleTx={titleTx}
        />
      )}

      <View style={[styles.content, style]}>
        {children}
      </View>
    </View>
  );
};

export default Screen;
