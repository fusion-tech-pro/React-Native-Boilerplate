import createStylesHook from 'src/theme/createStylesHook';

const useComponentStyles = createStylesHook(({
  colors,
  fontFamily,
}) => ({
  default: {
    color: colors.textDark,
    fontFamily: fontFamily.medium,
    fontSize: 16,
  },

  headerType: {
    fontFamily: fontFamily.semiBold,
    fontSize: 24,
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
