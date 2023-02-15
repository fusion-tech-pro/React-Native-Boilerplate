import createStylesHook from 'src/theme/createStylesHook';

const useComponentStyles = createStylesHook(({
  hp,
}) => ({
  label: {
    marginTop: hp(16),
  },

  button: {
    marginTop: hp(8),
  },
}));

export default useComponentStyles;
