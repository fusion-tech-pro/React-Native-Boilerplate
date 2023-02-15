import createStylesHook from 'src/theme/createStylesHook';
import { CONTAINER_MARGIN_RIGHT } from './IconForDefaultButton.constants';

const useComponentStyles = createStylesHook(() => ({
  container: {
    marginRight: CONTAINER_MARGIN_RIGHT,
  },
}));

export default useComponentStyles;
