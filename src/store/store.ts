import {
  combineReducers,
  configureStore,
} from '@reduxjs/toolkit';
import {
  TypedUseSelectorHook,
  useDispatch,
  useSelector,
} from 'react-redux';

import userReducer from './slices/user';
import appReducer from './slices/app';

const rootReducer = combineReducers({
  user: userReducer,
  app: appReducer,
});

const store = configureStore({
  reducer: (state, action) => {
    if (action.type === 'store/reset') {
      return rootReducer(undefined, action);
    }
    return rootReducer(state, action);
  },
  middleware: (getDefaultMiddleware) => {
    if (__DEV__) {
      const createDebugger = require('redux-flipper').default;
      return getDefaultMiddleware().concat(createDebugger());
    }

    return getDefaultMiddleware();
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof rootReducer>

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
