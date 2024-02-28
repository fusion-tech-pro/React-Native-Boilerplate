import createStylesHook from 'src/theme/createStylesHook';

const useComponentStyles = createStylesHook(({
  device,
}) => ({
  container: {
    alignItems: 'center',
  },

  developmentAnimationView: {
    height: 200,
    width: device.width,
    marginTop: 8,

    transform: [{ scale: 1.1 }],
  },

  description: {
    marginTop: 64,

    fontSize: 16,
    textAlign: 'center',
  },
}));

export default useComponentStyles;
