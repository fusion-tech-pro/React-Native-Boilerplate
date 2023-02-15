import createStylesHook from 'src/theme/createStylesHook';

const useComponentStyles = createStylesHook(({
  wp,
}) => ({
  container: {
    marginRight: wp(8),
  },
}));

export default useComponentStyles;
