import createStylesHook from 'src/theme/createStylesHook';

const useComponentStyles = createStylesHook(({ hp }) => ({
  passwordInput: {
    marginTop: hp(8),
  },
}));

export default useComponentStyles;
