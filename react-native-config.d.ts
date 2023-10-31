declare module 'react-native-config' {
  export interface NativeConfig {
    BASE_URL: string;

    LOGIN_GOOGLE: string;

    REFRESH_TOKEN: string;
  }

  export const Config: NativeConfig;
  export default Config;
}
