import colors from './colors';

export const hitSlop = {
  small: {
    top: 10,
    bottom: 10,
    left: 10,
    right: 10,
  },
  medium: {
    top: 20,
    bottom: 20,
    left: 20,
    right: 20,
  },
  large: {
    top: 30,
    bottom: 30,
    left: 30,
    right: 30,
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
