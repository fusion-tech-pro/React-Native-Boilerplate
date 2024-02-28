import createStylesHook from 'src/theme/createStylesHook';

const useComponentStyles = createStylesHook(() => ({
  label: {
    marginTop: 16,
  },

  button: {
    marginTop: 8,
  },
}));

export default useComponentStyles;
