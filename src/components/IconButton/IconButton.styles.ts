import createStylesHook from 'src/theme/createStylesHook';

const useComponentStyles = createStylesHook(({
  colors,
  absoluteFill,
}) => ({
  button: {
    height: 30,
    width: 30,

    justifyContent: 'center',
    alignItems: 'center',

    borderRadius: 20,
    overflow: 'hidden',
  },

  background: {
    ...absoluteFill,

    backgroundColor: colors.primaryActive,
  },
}));

export default useComponentStyles;
