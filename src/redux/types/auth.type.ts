export type AppStatus = {
  isReady: boolean;
};

export type LoginPayload = {
  email: string;
  password: string;
  device_token: string;
  idToken: string;
};

export type AuthState = {
  enableSignIn: boolean;
  accessToken: string;
  refreshToken: string;
  user: {};
};

export type RefreshToken = {
  refreshToken: string;
  accessToken: string;
};
