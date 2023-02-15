import createStylesHook from 'src/theme/createStylesHook';

const useComponentStyles = createStylesHook(({
  hp,
  device,
  fontSize,
}) => ({
  container: {
    alignItems: 'center',
  },

  developmentAnimationView: {
    height: hp(200),
    width: device.width,
    marginTop: hp(8),

    transform: [{ scale: 1.1 }],
  },

  description: {
    marginTop: hp(64),

    fontSize: fontSize[16],
    textAlign: 'center',
  },
}));

export default useComponentStyles;
