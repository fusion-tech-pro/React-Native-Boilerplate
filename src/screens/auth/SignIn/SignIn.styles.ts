import createStylesHook from 'src/theme/createStylesHook';

const useComponentStyles = createStylesHook(() => ({
  input: {
    marginTop: 16,
  },
}));

export default useComponentStyles;
