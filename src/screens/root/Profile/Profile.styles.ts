import createStylesHook from 'src/theme/createStylesHook';

const useComponentStyles = createStylesHook(({
  hp,
}) => ({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  themeSwitchContainer: {
    width: '100%',
  },

  button: {
    marginTop: hp(8),
  },
}));

export default useComponentStyles;
