import createStylesHook from 'src/theme/createStylesHook';

const useComponentStyles = createStylesHook(() => ({
  passwordInput: {
    marginTop: 8,
  },
}));

export default useComponentStyles;
