import { hp, wp } from 'src/utils/responsive';

import colors from './colors';

export const hitSlop = {
  small: {
    top: hp(10),
    bottom: hp(10),
    left: wp(10),
    right: wp(10),
  },
  medium: {
    top: hp(20),
    bottom: hp(20),
    left: wp(20),
    right: wp(20),
  },
  large: {
    top: hp(30),
    bottom: hp(30),
    left: wp(30),
    right: wp(30),
  },
};

export const shadowStyle = {
  small: {
    shadowColor: colors.shadow,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.06,
    shadowRadius: 20,

    elevation: 1,
  },
  medium: {
    shadowColor: colors.shadow,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  large: {
    shadowColor: colors.shadow,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 1,
  },
};
