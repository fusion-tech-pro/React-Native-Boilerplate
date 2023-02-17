import { useMemo } from 'react';
import { StyleSheet, useWindowDimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import device from 'src/constants/device';
import useTheme from 'src/hooks/useTheme';
import {
  hp,
  wp,
  getFontSize,
  getLetterSpacing,
  getLineHeight,
} from 'src/utils/responsive';
import { fontFamily, fontSize } from 'src/theme/fonts';
import defaultColors from '../colors';
import { shadowStyle } from '../layout';

export type StyleProps = {
  colors: typeof defaultColors;
  defaultColors: typeof defaultColors;
  fontFamily: typeof fontFamily;
  fontSize: typeof fontSize;
  shadowStyle: typeof shadowStyle;
  screenWidth: number;
  screenHeight: number;
  safeAreaTopMargin: number;
  safeAreaBottomMargin: number;
  device: typeof device;
  absoluteFill: typeof StyleSheet.absoluteFillObject;
  hp: typeof hp;
  wp: typeof wp;
  getFontSize: typeof getFontSize;
  getLineHeight: typeof getLineHeight;
  getLetterSpacing: typeof getLetterSpacing;
}

const useStyleProps = () => {
  const { colors: themeColors } = useTheme();
  const { width, height } = useWindowDimensions();
  const { top: safeAreaTopMargin, bottom: safeAreaBottomMargin } = useSafeAreaInsets();

  const styleProps: StyleProps = useMemo(
    () => ({
      screenWidth: width,
      screenHeight: height,
      safeAreaTopMargin,
      safeAreaBottomMargin,
      colors: themeColors,
      defaultColors,
      fontFamily,
      fontSize,
      shadowStyle,
      device,
      absoluteFill: StyleSheet.absoluteFillObject,
      hp,
      wp,
      getFontSize,
      getLineHeight,
      getLetterSpacing,
    }),
    [
      width,
      height,
      safeAreaTopMargin,
      safeAreaBottomMargin,
      themeColors,
    ],
  );

  return styleProps;
};

export default useStyleProps;
