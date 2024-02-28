import createStylesHook from 'src/theme/createStylesHook';

const useComponentStyles = createStylesHook(({
  safeAreaTopMargin,
  device,
}) => ({
  container: {
    height: 45 + safeAreaTopMargin,

    paddingTop: safeAreaTopMargin || 8,

    flexDirection: 'row',
    alignItems: 'center',
  },

  leftContent: {
    flex: 1,
    justifyContent: 'center',
    height: 30,
  },

  title: {
    flex: 3,
    textAlign: 'center',
    justifyContent: 'center',

    lineHeight: device.isIOS ? undefined : 25,
  },

  rightContent: {
    flex: 1,
    alignItems: 'flex-end',
  },
}));

export default useComponentStyles;
