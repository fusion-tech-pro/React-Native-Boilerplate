import createStylesHook from 'src/theme/createStylesHook';

const useComponentStyles = createStylesHook(({
  colors,
  absoluteFill,
  hp,
}) => ({
  button: {
    height: hp(30),
    width: hp(30),

    justifyContent: 'center',
    alignItems: 'center',

    borderRadius: hp(20),
    overflow: 'hidden',
  },

  background: {
    ...absoluteFill,

    backgroundColor: colors.primaryActive,
  },
}));

export default useComponentStyles;
