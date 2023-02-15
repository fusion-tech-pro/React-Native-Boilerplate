import createStylesHook from 'src/theme/createStylesHook';

const useComponentStyles = createStylesHook(({
  colors,
}) => ({
  container: {
    flex: 1,

    backgroundColor: colors.backgroundLight,
  },
}));

export default useComponentStyles;
