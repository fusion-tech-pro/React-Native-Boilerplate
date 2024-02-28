import createStylesHook from 'src/theme/createStylesHook';

const useComponentStyles = createStylesHook(({
  colors,
}) => ({
  container: {
    width: '100%',
    marginTop: 8,

    overflow: 'hidden',
  },

  ruleContainer: {
    marginTop: 2,

    flexDirection: 'row',
    alignItems: 'center',
  },

  ruleDescription: {
    fontSize: 12,
    marginLeft: 4,
  },

  ruleDescriptionUnchecked: {
    color: colors.disabled,
  },
}));

export default useComponentStyles;
