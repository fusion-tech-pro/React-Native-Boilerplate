import createStylesHook from 'src/theme/createStylesHook';

const useComponentStyles = createStylesHook(({
  colors,
  fontFamily,
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
    marginBottom: 4,

    fontFamily: fontFamily.semiBold,
    fontSize: 16,
    color: colors.textDark,
  },

  labelError: {
    color: colors.danger,
  },

  inputContainer: {
    height: 60,
    width: '100%',

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    backgroundColor: colors.backgroundGrayLight,
    borderRadius: 5,
    borderWidth: 1,
  },

  input: {
    flex: 1,
    height: '100%',

    paddingHorizontal: 16,

    color: colors.textDark,
    fontSize: 16,
    fontFamily: fontFamily.medium,
  },

  error: {
    color: colors.danger,
    fontSize: 12,
  },
}));

export default useComponentStyles;
