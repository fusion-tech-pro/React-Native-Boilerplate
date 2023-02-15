import { StatusBar } from 'react-native';

import { useAppDispatch, useAppSelector } from 'src/store';
import { setColorTheme } from 'src/store/slices/app';
import { defaultColors, lightColors, darkColors } from 'src/theme/colors';
import { ColorTheme } from 'src/types';
import { useMemo } from 'react';

const useTheme = () => {
  const dispatch = useAppDispatch();

  const { colorTheme } = useAppSelector((state) => state.app);

  const defaultColorTheme = {
    ...defaultColors,
    ...lightColors,
  };

  const currentColors = useMemo(() => {
    switch (colorTheme) {
      case 'dark':
        StatusBar.setBarStyle('light-content');

        return ({
          ...defaultColors,
          ...darkColors,
        });
      default:
        StatusBar.setBarStyle('dark-content');
        return defaultColorTheme;
    }
  }, [colorTheme]);

  const setNewColorTheme = (newColorTheme: ColorTheme) => {
    switch (newColorTheme) {
      case 'dark':
        StatusBar.setBarStyle('light-content');
        break;
      default:
        StatusBar.setBarStyle('dark-content');
    }

    dispatch(setColorTheme(newColorTheme));
  };

  return {
    colorTheme,
    colors: currentColors,
    setNewColorTheme,
  };
};

export default useTheme;
