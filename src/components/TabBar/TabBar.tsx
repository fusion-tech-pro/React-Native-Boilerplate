import React, { FC, useEffect, useState } from 'react';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { ParamListBase, RouteProp } from '@react-navigation/native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSequence,
  withTiming,
} from 'react-native-reanimated';

import { View } from 'react-native';

import useTheme from 'src/hooks/useTheme';
import device from 'src/constants/device';
import { wp } from 'src/utils/responsive';
import { sleep } from 'src/utils/common';
import { TabNavigatorParamList } from 'src/navigation/TabNavigator';

import HomeIcon from 'src/assets/icons/home.svg';
import NoteIcon from 'src/assets/icons/note.svg';
import BellIcon from 'src/assets/icons/bell.svg';
import ProfileIcon from 'src/assets/icons/profile.svg';
import IconButton from '../IconButton';

import {
  TAB_BAR_HORIZONTAL_MARGIN,
  TAB_BAR_HORIZONTAL_PADDING,
  TAB_BUTTON_SIZE,
  TAB_INDICATOR_ANIMATION_DURATION,
  TAB_INDICATOR_SIZE,
} from './TabBar.constants';
import useComponentStyles from './TabBar.styles';

const TabBar: FC<BottomTabBarProps> = ({
  state,
  navigation,
}) => {
  const { colors } = useTheme();
  const styles = useComponentStyles();

  const [prepairedTabIndex, setPrepairedTabIndex] = useState<number | undefined>(0);

  const indicatorLeftPosition = useSharedValue(0);

  useEffect(() => {
    animateTabChangeTransition();
  }, [state.index]);

  const indicatorAnimatedStyle = useAnimatedStyle(() => {
    return {
      left: withTiming(indicatorLeftPosition.value, { duration: TAB_INDICATOR_ANIMATION_DURATION }),
      transform: [
        {
          scaleY: withSequence(
            withTiming(0.3, { duration: TAB_INDICATOR_ANIMATION_DURATION / 2 }),
            withTiming(1, { duration: TAB_INDICATOR_ANIMATION_DURATION / 2 }),
          ),
        },
      ],
    };
  }, [state.index]);

  const animateTabChangeTransition = async () => {
    const TABS_COUNT = state.routes.length;

    const START_OFFSET = TAB_BAR_HORIZONTAL_PADDING + (TAB_BUTTON_SIZE - TAB_INDICATOR_SIZE) / 2;
    const TAB_BAR_WIDTH = device.width - (TAB_BAR_HORIZONTAL_MARGIN * 2);
    const TAB_BAR_CONTENT_WIDTH = TAB_BAR_WIDTH - (TAB_BAR_HORIZONTAL_PADDING * 2);

    const OFFSET_BETWEEN_TABS =
      (TAB_BAR_CONTENT_WIDTH - (TAB_BUTTON_SIZE * TABS_COUNT)) / (TABS_COUNT - 1);

    indicatorLeftPosition.value =
      START_OFFSET + (state.index * TAB_BUTTON_SIZE) + (state.index * OFFSET_BETWEEN_TABS);

    setPrepairedTabIndex(undefined);
    await sleep(TAB_INDICATOR_ANIMATION_DURATION / 1.5);
    setPrepairedTabIndex(state.index);
  };

  const getIconForRoute = (routeName: string) => {
    switch (routeName as keyof TabNavigatorParamList) {
      case 'Home':
        return HomeIcon;
      case 'Notes':
        return NoteIcon;
      case 'Notifications':
        return BellIcon;
      case 'Profile':
        return ProfileIcon;
      default:
        return HomeIcon;
    }
  };

  const onTabPress = (route: RouteProp<ParamListBase>) => {
    navigation.navigate(route.name);
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.indicator, indicatorAnimatedStyle]} />

      {state.routes.map((route, index) => {
        const { name, key } = route;
        const isPrepaired = index === prepairedTabIndex;

        const Icon = getIconForRoute(name);

        return (
          <IconButton
            key={key}
            style={styles.tabItem}
            Icon={(
              <Icon
                fill={isPrepaired ? colors.tabBarActiveTab : colors.tabBarInactiveTab}
                width={wp(16)}
                height={wp(16)}
              />
            )}
            onPress={() => onTabPress(route)}
          />
        );
      })}
    </View>

  );
};

export default TabBar;
