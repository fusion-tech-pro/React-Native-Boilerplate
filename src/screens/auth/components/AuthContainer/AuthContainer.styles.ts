import createStylesHook from 'src/theme/createStylesHook';

const useComponentStyles = createStylesHook(({
  safeAreaTopMargin,
  colors,
  device,
  hp,
  wp,
}) => ({
  container: {
    flex: 1,
    alignItems: 'center',

    backgroundColor: colors.backgroundLight,
  },

  scrollContainer: {
    width: '100%',
  },

  scrollContent: {
    paddingHorizontal: wp(16),
  },

  scrollContentScrollable: {
    paddingBottom: device.isIOS ? hp(200) : 0,
  },

  form: {
    width: '100%',
    alignItems: 'center',

    paddingTop: safeAreaTopMargin,
  },

  title: {
    textAlign: 'center',
  },

  description: {
    textAlign: 'center',
    marginTop: hp(8),
  },

  submitButton: {
    marginTop: hp(16),
  },

  forgotPasswordText: {
    marginTop: hp(12),
  },
}));

export default useComponentStyles;
