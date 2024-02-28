import createStylesHook from 'src/theme/createStylesHook';

const useComponentStyles = createStylesHook(({
  safeAreaBottomMargin,
  shadowStyle,
  colors,
}) => ({
  container: {
    position: 'absolute',
    bottom: safeAreaBottomMargin || 16,
    left: 24,
    right: 24,

    paddingHorizontal: 24,
    paddingVertical: 8,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    backgroundColor: colors.backgroundLightComponent,
    borderRadius: 16,

    ...shadowStyle.medium,
  },

  tabItem: {
    width: 48,
    height: 48,

    borderRadius: 24,
  },
}));

export default useComponentStyles;
