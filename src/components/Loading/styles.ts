import {StyleSheet} from 'react-native';
import {makeStyles, normalize} from '@rneui/themed';
import {Device} from '../../utils/device';

const WIDTH = Device.getDeviceWidth();
const HEIGHT = Device.getDeviceHeight();

const useStyles = makeStyles(() => ({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.10)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 3000,
  },
  container: {
    width: normalize(WIDTH * 0.69),
    height: normalize(HEIGHT * 0.269),
    backgroundColor: 'rgba(256, 256, 256, 2)',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 9,
  },
  lottieView: {
    width: normalize(400),
    height: normalize(200),
    position: 'absolute',
  },

  titleStyle: {
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
    color: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 20,
  },
}));

export default useStyles;
