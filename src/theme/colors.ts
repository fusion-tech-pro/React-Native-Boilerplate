export const defaultColors = {
  textInattentive: '#838B86',

  iconLight: '#ffffff',

  disabled: '#AFB4B1',
  disabledDark: '#696C6A',

  danger: '#C62941',
  warning: '#E5A802',
  success: '#169643',
  info: '#035399',

  shadow: '#071013',
};

export const lightColors = {
  primary: '#273B7A',
  primaryLight: '#6B83CF',
  primaryActive: '#DFE4F5',

  backgroundLight: '#ffffff',
  backgroundLightComponent: '#ffffff',
  backgroundGrayLight: '#F6F6F6',

  textLight: '#ffffff',
  textDark: '#071013',

  iconDark: '#071013',

  tabBarActiveTab: '#6B83CF',
  tabBarInactiveTab: '#071013',
};

export const darkColors = {
  primary: '#71E2EF',
  primaryLight: '#38C6D9',
  primaryActive: '#278a97',

  backgroundLight: '#071013',
  backgroundLightComponent: '#242c30',
  backgroundGrayLight: '#242c30',

  textLight: '#071013',
  textDark: '#ffffff',

  iconDark: '#ffffff',

  tabBarActiveTab: '#71E2EF',
  tabBarInactiveTab: '#f4f5f5',
};

export default {
  ...defaultColors,
  ...lightColors,
};
