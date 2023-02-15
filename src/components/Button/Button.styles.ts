import createStylesHook from 'src/theme/createStylesHook';

const useComponentStyles = createStylesHook(({
  colors,
  fontFamily,
  absoluteFill,
  hp,
}) => ({
  button: {
    height: hp(40),
    width: '100%',

    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

    borderRadius: hp(5),
    overflow: 'hidden',
  },

  buttonContained: {
    backgroundColor: colors.primary,
  },

  buttonOutlined: {
    borderColor: colors.primary,
    borderWidth: 1,
  },

  buttonDisabled: {
    backgroundColor: colors.disabled,
  },

  buttonDisabledOutlined: {
    borderColor: colors.disabledDark,
  },

  disabledBackground: {
    ...absoluteFill,
    backgroundColor: colors.disabled,
  },

  title: {
    color: colors.textLight,
    fontFamily: fontFamily.bold,
  },

  titleOutlined: {
    color: colors.primary,
  },

  titleDisabledContainedButton: {
    color: colors.textLight,
  },

  titleDisabledOutlinedButton: {
    color: colors.disabledDark,
  },
}));

export default useComponentStyles;
