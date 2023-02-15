import createStylesHook from 'src/theme/createStylesHook';

const useComponentStyles = createStylesHook(({
  colors,
  fontFamily,
  fontSize,
}) => ({
  default: {
    color: colors.textDark,
    fontFamily: fontFamily.medium,
    fontSize: fontSize[12],
  },

  headerType: {
    fontFamily: fontFamily.semiBold,
    fontSize: fontSize[18],
  },

  inattentiveType: {
    color: colors.textInattentive,
  },

  actionType: {
    color: colors.primary,
    fontFamily: fontFamily.bold,
  },
}));

export default useComponentStyles;
