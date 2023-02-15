import createStylesHook from 'src/theme/createStylesHook';

const useComponentStyles = createStylesHook(({
  colors,
  fontSize,
  wp,
  hp,
}) => ({
  container: {
    width: '100%',
    marginTop: hp(8),

    overflow: 'hidden',
  },

  ruleContainer: {
    marginTop: hp(2),

    flexDirection: 'row',
    alignItems: 'center',
  },

  ruleDescription: {
    fontSize: fontSize[10],
    marginLeft: wp(4),
  },

  ruleDescriptionUnchecked: {
    color: colors.disabled,
  },
}));

export default useComponentStyles;
