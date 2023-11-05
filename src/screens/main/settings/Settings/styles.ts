import {makeStyles, normalize} from '@rneui/themed';
import {StyleSheet} from 'react-native';
import {Device} from '../../../../utils/device';

const WIDTH = Device.getDeviceWidth();
const HEIGHT = Device.getDeviceHeight();

const useStyles = makeStyles(() => ({
  container: {
    flex: 1,
  },
  body: {
    flex: 1,
    backgroundColor: '#2D5381',
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapper: {
    ...StyleSheet.absoluteFillObject,
  },
  view1: {
    width: '100%',
    height: normalize(120),
    position: 'absolute',
    top: normalize(HEIGHT * 0.099),
  },
  view2: {
    width: '100%',
    height: normalize(HEIGHT * 0.8),
    backgroundColor: '#FFFFFF',
    borderRadius: normalize(20),
    top: normalize(HEIGHT * 0.39),
    position: 'absolute',
    alignItems: 'center',
  },
  viewCenter: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewRow: {
    flexDirection: 'row',
  },
  viewItem: {
    width: normalize(WIDTH * 0.77),
    height: normalize(HEIGHT * 0.063),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: normalize(HEIGHT * 0.039),
  },
  viewImage: {
    width: normalize(83),
    height: normalize(83),
    backgroundColor: '#FFF',
    borderRadius: normalize(100),
  },
  textFullName: {
    width: normalize(WIDTH * 0.5),
    textAlign: 'center',
    color: 'white',
    fontSize: normalize(23),
    fontWeight: 'bold',
    marginVertical: normalize(9),
  },
  textPosition: {
    width: normalize(WIDTH * 0.5),
    textAlign: 'center',
    color: 'white',
    fontSize: normalize(16),
    fontWeight: 'normal',
  },
  text: {
    color: '#858585',
    fontSize: normalize(16),
    fontWeight: 'normal',
    marginLeft: normalize(16),
    marginBottom: normalize(6),
  },
  icon: {
    width: normalize(44),
    height: normalize(44),
    borderRadius: normalize(12),
    backgroundColor: '#e6e6e6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconTransform: {
    width: normalize(44),
    height: normalize(44),
    transform: [{rotateY: '180deg'}],
    justifyContent: 'center',
    alignItems: 'center',
  },
  outter: {
    width: normalize(56),
    height: normalize(29),
    borderRadius: normalize(15),
    backgroundColor: '#e6e6e6',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: normalize(2),
  },
  off: {
    justifyContent: 'flex-start',
    backgroundColor: '#e6e6e6',
    borderWidth: 2,
    borderColor: '#2245AC',
  },
  on: {
    justifyContent: 'flex-end',
    backgroundColor: '#2245AC',
    borderWidth: 2,
    borderColor: '#00C5FF',
  },
  innerOFF: {
    width: normalize(20),
    height: normalize(20),
    backgroundColor: '#2245AC',
    borderRadius: normalize(15),
    elevation: normalize(8),
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: normalize(0.15),
    shadowRadius: normalize(2),
  },
  innerON: {
    width: normalize(20),
    height: normalize(20),
    backgroundColor: '#FFFFFF',
    borderRadius: normalize(15),
    elevation: normalize(8),
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: normalize(0.15),
    shadowRadius: normalize(2),
  },
}));
export default useStyles;
