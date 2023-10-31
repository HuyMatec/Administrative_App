import {createTheme} from '@rneui/themed';

declare module '@rneui/themed' {
  export interface Colors {}
}

export const theme = createTheme({
  lightColors: {
    primary: '#2D5381',
    secondary: '#FFFFFF',
    background: '#FFFFFF',
    black: '#000000',
  },
});
