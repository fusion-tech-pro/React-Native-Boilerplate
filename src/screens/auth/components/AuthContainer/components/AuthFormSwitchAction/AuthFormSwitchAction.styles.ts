import createStylesHook from 'src/theme/createStylesHook';

const useComponentStyles = createStylesHook(() => ({
  container: {
    marginTop: 12,
    marginBottom: 32,
  },
}));

export default useComponentStyles;
