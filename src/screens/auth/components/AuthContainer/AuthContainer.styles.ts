import createStylesHook from 'src/theme/createStylesHook';

const useComponentStyles = createStylesHook(({
  safeAreaTopMargin,
  colors,
  device,
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
    paddingHorizontal: 24,
  },

  scrollContentScrollable: {
    paddingBottom: device.isIOS ? 200 : 0,
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
    marginTop: 8,
  },

  submitButton: {
    marginTop: 16,
  },

  forgotPasswordText: {
    marginTop: 12,
  },
}));

export default useComponentStyles;
