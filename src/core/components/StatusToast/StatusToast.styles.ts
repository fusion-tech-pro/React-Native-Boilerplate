import createStylesHook from 'src/theme/createStylesHook';

type Args = {
  statusColor: string;
};

const useComponentStyles = createStylesHook(({
  fontFamily,
  shadowStyle,
  colors,
  device,
}, {
  statusColor,
}: Args) => ({
  container: {
    width: device.width - 16,

    flexDirection: 'row',

    paddingVertical: 8,
    paddingHorizontal: 8,

    backgroundColor: colors.backgroundLightComponent,
    borderRadius: 13,

    ...shadowStyle.medium,
  },

  iconContainer: {
    width: 40,
    height: 40,

    justifyContent: 'center',
    alignItems: 'center',

    borderRadius: 30 / 2,
    backgroundColor: statusColor,
  },

  textContainer: {
    flex: 1,
    justifyContent: 'space-between',

    paddingHorizontal: 8,
  },

  titleText: {
    fontFamily: fontFamily.bold,
    fontSize: 12,
  },

  descriptionText: {
    fontSize: 12,
  },
}));

export default useComponentStyles;
