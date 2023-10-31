import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {AppReducer, AuthReducer} from '../reducer';
import {Redux} from '../types/redux.type';

const rootReducers = combineReducers({
  auth: AuthReducer,
  app: AppReducer,
});

export const store = configureStore({
  reducer: rootReducers,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false, // to ignore redux-persist
    }),
});

export type RootState = ReturnType<typeof rootReducers>;
export type AppDispatch = typeof store.dispatch;
