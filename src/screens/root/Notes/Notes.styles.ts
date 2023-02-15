import createStylesHook from 'src/theme/createStylesHook';

const useComponentStyles = createStylesHook(({
  hp,
}) => ({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  button: {
    marginTop: hp(8),
  },
}));

export default useComponentStyles;
