import createStylesHook from 'src/theme/createStylesHook';

type Args = {
  statusColor: string;
};

const useComponentStyles = createStylesHook(({
  fontFamily,
  fontSize,
  shadowStyle,
  colors,
  device,
  wp,
  hp,
}, {
  statusColor,
}: Args) => ({
  container: {
    width: device.width - hp(16),

    flexDirection: 'row',

    paddingVertical: hp(8),
    paddingHorizontal: wp(8),

    backgroundColor: colors.backgroundLightComponent,
    borderRadius: hp(13),

    ...shadowStyle.medium,
  },

  iconContainer: {
    width: wp(40),
    height: wp(40),

    justifyContent: 'center',
    alignItems: 'center',

    borderRadius: wp(30) / 2,
    backgroundColor: statusColor,
  },

  textContainer: {
    flex: 1,
    justifyContent: 'space-between',

    paddingHorizontal: wp(8),
  },

  titleText: {
    fontFamily: fontFamily.bold,
    fontSize: fontSize[12],
  },

  descriptionText: {
    fontSize: fontSize[12],
  },
}));

export default useComponentStyles;
