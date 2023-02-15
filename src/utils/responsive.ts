import { RFValue } from 'react-native-responsive-fontsize';
import { widthPercentageToDP, heightPercentageToDP } from 'react-native-responsive-screen';

import device from 'src/constants/device';

const getRatio = (value: number): number => (device.height * value) / device.defaultScreenHeight;

export const getFontSize = (fontSize: number): number => {
  const responsiveFontSize = RFValue(fontSize, device.defaultScreenHeight);
  return responsiveFontSize;
};

export const getLineHeight = (lineHeight: number): number => {
  const responsiveLineHeight = getRatio(lineHeight);
  return Math.trunc(responsiveLineHeight);
};

export const getLetterSpacing = (letterSpacing: number): number => {
  const responsiveLetterSpacing = getRatio(letterSpacing);
  return +responsiveLetterSpacing.toFixed(2);
};

// Calculation according to the Figma width (px)
export const wp = (width: number) => {
  const widthPercentage = (width / device.defaultScreenWidth) * 100;
  return widthPercentageToDP(widthPercentage);
};

// Calculation according to the Figma height (px)
export const hp = (height: number) => {
  const heightPercentage = (height / device.defaultScreenHeight) * 100;
  return heightPercentageToDP(heightPercentage);
};
