import createStylesHook from 'src/theme/createStylesHook';

const useComponentStyles = createStylesHook(({
  safeAreaTopMargin,
  device,
  hp,
}) => ({
  container: {
    height: hp(38) + safeAreaTopMargin,

    paddingTop: safeAreaTopMargin || hp(8),

    flexDirection: 'row',
    alignItems: 'center',
  },

  leftContent: {
    flex: 1,
    justifyContent: 'center',
    height: hp(30),
  },

  title: {
    flex: 3,
    textAlign: 'center',
    justifyContent: 'center',

    lineHeight: device.isIOS ? undefined : hp(25),
  },

  rightContent: {
    flex: 1,
    alignItems: 'flex-end',
  },
}));

export default useComponentStyles;
