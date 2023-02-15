import { getFontSize } from 'src/utils/responsive';

export const fontSize = {
  8: getFontSize(8),
  10: getFontSize(10),
  12: getFontSize(12),
  14: getFontSize(14),
  16: getFontSize(16),
  18: getFontSize(18),
  32: getFontSize(32),
};

export const fontFamily = {
  thin: 'NotoSans-Thin',
  extraLight: 'NotoSans-ExtraLight',
  light: 'NotoSans-Light',
  regular: 'NotoSans-Regular',
  medium: 'NotoSans-Medium',
  semiBold: 'NotoSans-SemiBold',
  bold: 'NotoSans-Bold',
  extraBold: 'NotoSans-ExtraBold',
  black: 'NotoSans-Black',
  italic: {
    thin: 'NotoSans-ThinItalic',
    extraLight: 'NotoSans-ExtraLightItalic',
    light: 'NotoSans-LightItalic',
    regular: 'NotoSans-RegularItalic',
    medium: 'NotoSans-MediumItalic',
    semiBold: 'NotoSans-SemiBoldItalic',
    bold: 'NotoSans-BoldItalic',
    extraBold: 'NotoSans-ExtraBoldItalic',
    black: 'NotoSans-BlackItalic',
  },
};
