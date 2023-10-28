import {RootState} from '../store';

export const getAuthEnableSignIn = (state: RootState) =>
  state.auth.enableSignIn;

export const getAuthAccessToken = (state: RootState) => state.auth.accessToken;
export const getAuthRefreshToken = (state: RootState) =>
  state.auth.refreshToken;
