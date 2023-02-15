import createStylesHook from 'src/theme/createStylesHook';

const useComponentStyles = createStylesHook(({
  fontSize,
}) => ({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  lastItem: {
    borderBottomWidth: 0,
  },

  title: {
    marginRight: 8,

    fontSize: fontSize[12],
  },
}));

export default useComponentStyles;
