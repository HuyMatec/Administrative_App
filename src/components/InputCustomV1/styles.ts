import {makeStyles, normalize} from '@rneui/themed';
import {Device} from '../../utils/device';

const WIDTH = Device.getDeviceWidth();
const HEIGHT = Device.getDeviceHeight();

const useStyles = makeStyles(() => ({
  input: {
    width: normalize(WIDTH * 0.8),
    height: normalize(44),
    backgroundColor: '#F1F4F5',
    borderWidth: normalize(0.5),
    borderColor: '#D9D9D9',
    borderRadius: normalize(9),
    paddingLeft: normalize(9),
    fontSize: normalize(15),
    letterSpacing: normalize(0.3),
    color: 'black',
  },
  placeholderColor: {
    color: 'gray',
  },
  icon: {
    position: 'absolute',
    right: 0,
    width: normalize(30),
    height: normalize(30),
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  leftIcon: {
    color: 'black',
  },
  errorStyle: {
    width: '100%',
    marginLeft: normalize(-1),
    fontSize: normalize(12),
    color: 'red',
    letterSpacing: normalize(0.3),
  },
}));

export default useStyles;
