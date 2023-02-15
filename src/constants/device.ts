import { Dimensions, Platform } from 'react-native';
import DeviceInfo from 'react-native-device-info';

const { height, width } = Dimensions.get('window');

const isTablet = DeviceInfo.isTablet();

export default {
  width,
  height,
  isIOS: Platform.OS === 'ios',
  isTablet,
  defaultScreenHeight: 568, // device height in Figma
  defaultScreenWidth: 320, // device width in Figma
};
