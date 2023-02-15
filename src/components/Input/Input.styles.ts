import createStylesHook from 'src/theme/createStylesHook';

const useComponentStyles = createStylesHook(({
  colors,
  fontSize,
  fontFamily,
  hp,
  wp,
}) => ({
  container: {
    width: '100%',
  },

  topContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  label: {
    marginBottom: hp(4),

    fontFamily: fontFamily.semiBold,
    fontSize: fontSize[12],
    color: colors.textDark,
  },

  labelError: {
    color: colors.danger,
  },

  inputContainer: {
    height: hp(40),
    width: '100%',

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    backgroundColor: colors.backgroundGrayLight,
    borderRadius: hp(5),
    borderWidth: 1,
  },

  input: {
    flex: 1,
    height: '100%',

    paddingHorizontal: wp(16),

    color: colors.textDark,
    fontSize: fontSize[12],
    fontFamily: fontFamily.medium,
  },

  error: {
    color: colors.danger,
    fontSize: fontSize[10],
  },
}));

export default useComponentStyles;
