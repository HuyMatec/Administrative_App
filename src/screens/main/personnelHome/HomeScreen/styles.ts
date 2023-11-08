import {makeStyles, normalize} from '@rneui/themed';
import {StyleSheet} from 'react-native';
import {Device} from '../../../../utils/device';

const WIDTH = Device.getDeviceWidth();
const HEIGHT = Device.getDeviceHeight();

const useStyles = makeStyles(() => ({
  container: {
    flex: 5,
  },
  body: {
    flex: 1,
    backgroundColor: '#2D5381',
  },
  wrapper: {
    ...StyleSheet.absoluteFillObject,
  },
  view1: {
    width: normalize(WIDTH * 0.06),
    height: normalize(56),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    top: normalize(69),
    left: normalize(16),
  },
  view2: {
    flex: 4,
    width: '100%',
    height: normalize(HEIGHT * 0.8),
    backgroundColor: '#FFFFFF',
    borderRadius: normalize(20),
    top: normalize(HEIGHT * 0.19),
    position: 'absolute',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  view3: {
    width: normalize(WIDTH * 0.9),
    height: normalize(80),
    borderRadius: normalize(16),
    paddingHorizontal: normalize(30),
    marginBottom: normalize(20),
    flexDirection: 'row',
    backgroundColor: '#F1F4F5',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  viewImage: {
    width: normalize(48),
    height: normalize(48),
    backgroundColor: '#FFF',
    borderRadius: normalize(100),
  },
  textFullName: {
    width: normalize(WIDTH * 0.68),
    marginLeft: normalize(9),
    color: 'white',
    fontSize: normalize(18),
    fontWeight: 'bold',
    marginVertical: normalize(12),
  },
  textDV: {
    color: 'black',
    fontSize: normalize(23),
    fontWeight: 'bold',
    marginTop: normalize(HEIGHT * 0.05),
    marginBottom: normalize(HEIGHT * 0.05),
  },
  textND: {
    marginLeft: normalize(30),
    color: 'black',
    fontSize: normalize(18),
    fontWeight: 'bold',
  },
}));
export default useStyles;
