import createStylesHook from 'src/theme/createStylesHook';

const useComponentStyles = createStylesHook(() => ({
  container: {
    marginRight: 8,
  },
}));

export default useComponentStyles;
