import { StyleSheet } from 'react-native';
import createStylesHook from 'src/theme/createStylesHook';

const useComponentStyles = createStylesHook(({
  defaultColors,
}) => ({
  container: {
    ...StyleSheet.absoluteFillObject,

    justifyContent: 'center',
    alignItems: 'center',

    backgroundColor: defaultColors.primary,
  },

  logo: {
    width: 200,
    height: 100,
  },
}));

export default useComponentStyles;
