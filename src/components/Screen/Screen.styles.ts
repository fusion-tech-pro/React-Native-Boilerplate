import createStylesHook from 'src/theme/createStylesHook';

type Args = {
  withSafeAreaTopPadding: boolean;
  withSafeAreaBottomPadding: boolean;
  withHorizontalPadding: boolean;
  withHeader: boolean;
};

const useComponentStyles = createStylesHook(({
  safeAreaTopMargin,
  safeAreaBottomMargin,
  colors,
  hp,
}, {
  withSafeAreaTopPadding,
  withSafeAreaBottomPadding,
  withHorizontalPadding,
  withHeader,
}: Args) => ({
  container: {
    flex: 1,

    paddingTop: (withSafeAreaTopPadding && !withHeader) ? safeAreaTopMargin : 0,
    paddingBottom: withSafeAreaBottomPadding ? safeAreaBottomMargin : 0,

    backgroundColor: colors.backgroundLight,
  },

  content: {
    flex: 1,
    paddingHorizontal: withHorizontalPadding ? hp(16) : undefined,
  },
}));

export default useComponentStyles;
