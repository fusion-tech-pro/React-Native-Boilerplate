import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { User } from 'src/types';

type userInitialState = {
  userData?: User;
};

const initialState: userInitialState = {
  userData: undefined,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => ({
      ...state,
      userData: action.payload,
    }),
    removeUser: (state) => ({
      ...state,
      userData: undefined,
    }),
  },
});

export const {
  setUser,
  removeUser,
} = userSlice.actions;

export default userSlice.reducer;
