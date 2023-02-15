import createStylesHook from 'src/theme/createStylesHook';
import {
  TAB_BAR_HORIZONTAL_MARGIN,
  TAB_BAR_HORIZONTAL_PADDING,
  TAB_BUTTON_SIZE,
  TAB_INDICATOR_SIZE,
} from './TabBar.constants';

const useComponentStyles = createStylesHook(({
  safeAreaBottomMargin,
  shadowStyle,
  colors,
  hp,
  wp,
}) => ({
  container: {
    position: 'absolute',
    bottom: safeAreaBottomMargin || hp(16),
    left: TAB_BAR_HORIZONTAL_MARGIN,
    right: TAB_BAR_HORIZONTAL_MARGIN,

    paddingHorizontal: TAB_BAR_HORIZONTAL_PADDING,
    paddingVertical: hp(4),

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    backgroundColor: colors.backgroundLightComponent,
    borderRadius: hp(16),

    ...shadowStyle.medium,
  },

  indicator: {
    position: 'absolute',

    left: 0,

    width: TAB_INDICATOR_SIZE,
    height: TAB_INDICATOR_SIZE,

    borderRadius: wp(16),
    backgroundColor: colors.primary,
  },

  tabItem: {
    width: TAB_BUTTON_SIZE,
    height: TAB_BUTTON_SIZE,
  },
}));

export default useComponentStyles;
