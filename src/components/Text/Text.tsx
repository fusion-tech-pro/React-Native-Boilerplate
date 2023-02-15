import React, { FC, PropsWithChildren, useMemo } from 'react';

import { Text as ReactNativeText, TextProps as RNTextProps } from 'react-native';

import { TxKeyPath, TxOptions } from 'src/locale';
import translate from 'src/locale/translate';
import useTheme from 'src/hooks/useTheme';

import useComponentStyles from './Text.styles';

export type TextProps = RNTextProps & {
  type?: 'default' | 'header' | 'inattentive' | 'action';
  text?: string;
  tx?: TxKeyPath;
  txOptions?: TxOptions;
};

const Text: FC<PropsWithChildren<TextProps>> = (props) => {
  const { colors } = useTheme();

  const styles = useComponentStyles();

  const {
    type,
    text,
    tx,
    txOptions,
    style,
    children,
  } = props;

  const typeStyle = useMemo(() => {
    switch (type) {
      case 'header':
        return styles.headerType;
      case 'inattentive':
        return styles.inattentiveType;
      case 'action':
        return styles.actionType;
      default:
        return undefined;
    }
  }, [type]);

  const translatedText = useMemo(() => {
    if (tx) {
      return translate(tx, txOptions);
    }
  }, [tx, txOptions]);

  const content = translatedText || text || children;

  return (
    <ReactNativeText
      selectionColor={colors.primaryActive}
      {...props}
      maxFontSizeMultiplier={0}
      style={[styles.default, typeStyle, style]}
    >
      {content}
    </ReactNativeText>
  );
};

export default Text;
