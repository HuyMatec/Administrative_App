import {TextStyle, ViewProps, ViewStyle} from 'react-native';

export type HeaderIcon = {
  name?: string;
  type?: string;
  color?: string;
  size?: number;
};

export type CustomHeaderProps = {
  viewStyle?: ViewStyle;
  title?: string;
  titleStyle?: TextStyle;
  onPressLeftIcon?: () => void;
  leftIcon?: HeaderIcon;
};
