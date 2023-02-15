import createStylesHook from 'src/theme/createStylesHook';

const useComponentStyles = createStylesHook(({
  hp,
}) => ({
  container: {
    marginTop: hp(12),
    marginBottom: hp(32),
  },
}));

export default useComponentStyles;
