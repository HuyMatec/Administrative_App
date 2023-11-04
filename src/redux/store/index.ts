import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {AppReducer, AuthReducer} from '../reducer';
import {LoadingReducer} from '../reducer/loading.reducer';

const rootReducers = combineReducers({
  loading: LoadingReducer,
  auth: AuthReducer,
  app: AppReducer,
});

const createDebugger = require('redux-flipper').default;
const middleware = [createDebugger()];

export const store = configureStore({
  reducer: rootReducers,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(middleware),
});

export type RootState = ReturnType<typeof rootReducers>;
export type AppDispatch = typeof store.dispatch;
