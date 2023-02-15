import React, {
  FC,
  useEffect,
  useState,
} from 'react';
import RNBootSplash from 'react-native-bootsplash';

import Animated, {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSequence,
  withTiming,
} from 'react-native-reanimated';

import device from 'src/constants/device';
import images from 'src/constants/images';
import { sleep } from 'src/utils/common';

import useComponentStyles from './SplashScreen.styles';

const SplashScreen: FC = () => {
  const styles = useComponentStyles();

  const [isSplashScreenVisible, setSplashScreenVisible] = useState(true);

  const containerOpacityAnimation = useSharedValue(1);
  const logoTranslateAnimation = useSharedValue(0);

  const containerAnimatedStyle = useAnimatedStyle(() => ({
    opacity: containerOpacityAnimation.value,
  }));

  const logoAnimatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: logoTranslateAnimation.value }],
  }));

  useEffect(() => {
    initSplashScreen();
  }, []);

  const initSplashScreen = async () => {
    await sleep(2000);
    await RNBootSplash.hide();

    logoTranslateAnimation.value = withSequence(
      withTiming(-100),
      withDelay(100, withTiming(device.height, { duration: 150 }))
    );
    containerOpacityAnimation.value = withDelay(400, withTiming(0, undefined, () => {
      runOnJS(hideSplashScreen)();
    }));
  };

  const hideSplashScreen = () => {
    setSplashScreenVisible(false);
  };

  if (!isSplashScreenVisible) {
    return null;
  }

  return (
    <Animated.View
      style={[
        styles.container,
        containerAnimatedStyle,
      ]}
    >
      <Animated.Image
        source={images.splashScreenLogo}
        fadeDuration={0}
        resizeMode="contain"
        style={[
          styles.logo,
          logoAnimatedStyle,
        ]}
      />
    </Animated.View>
  );
};

export default SplashScreen;
