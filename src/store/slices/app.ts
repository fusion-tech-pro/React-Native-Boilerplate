import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ColorTheme } from 'src/types';

type appInitialState = {
  isNetworkWorking: boolean;
  colorTheme: ColorTheme;
};

const initialState: appInitialState = {
  isNetworkWorking: true,
  colorTheme: 'light',
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setNetworkWorking: (state, action: PayloadAction<boolean>) => ({
      ...state,
      isNetworkWorking: action.payload,
    }),
    setColorTheme: (state, action: PayloadAction<ColorTheme>) => ({
      ...state,
      colorTheme: action.payload,
    }),
  },
});

export const {
  setNetworkWorking,
  setColorTheme,
} = appSlice.actions;

export default appSlice.reducer;
