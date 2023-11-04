import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {AuthState, LoginPayload, RefreshToken} from '../types/auth.type';
import {Redux} from '../types/redux.type';

const initialState: AuthState = {
  enableSignIn: false,
  accessToken: '',
  refreshToken: '',
  user: {},
};

const reducer = createSlice({
  name: Redux.auth,
  initialState,
  reducers: {
    handleLoginGoogle: (state: AuthState) => {
      return {
        ...state,
        enableSignIn: true,
        user: {},
      };
    },

    handleLoginSuccess: (
      state: AuthState,
      action: PayloadAction<Partial<AuthState>>,
    ) => {
      return {
        ...state,
        ...action.payload,
      };
    },

    //logout
    handleLogoutGoogle: (state: AuthState) => {
      return {
        ...state,
        enableSignIn: false,
        user: {},
      };
    },

    refreshToken: (state: AuthState, action: PayloadAction<RefreshToken>) => {
      return {
        ...state,
        accessToken: action.payload.accessToken,
        refreshToken: action.payload.refreshToken,
      };
    },
  },
});

export const AuthActions = reducer.actions;
export const AuthReducer = reducer.reducer;
