import {makeStyles} from '@rneui/themed';
import {StyleSheet} from 'react-native';
import {Device} from '../../../utils/device';

const WIDTH = Device.getDeviceWidth();
const HEIGHT = Device.getDeviceHeight();

const useStyles = makeStyles(() => ({
  container: {
    flex: 1,
  },
  wrapper: {
    ...StyleSheet.absoluteFillObject,
  },
  body: {
    flex: 1,
  },
}));
export default useStyles;
