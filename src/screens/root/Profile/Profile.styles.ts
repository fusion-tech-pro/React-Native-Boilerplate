import createStylesHook from 'src/theme/createStylesHook';

const useComponentStyles = createStylesHook(() => ({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  themeSwitchContainer: {
    width: '100%',
  },

  button: {
    marginTop: 8,
  },
}));

export default useComponentStyles;
