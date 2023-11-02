import {makeStyles, normalize} from '@rneui/themed';
import {StyleSheet} from 'react-native';
import {Device} from '../../../../utils/device';

const WIDTH = Device.getDeviceWidth();
const HEIGHT = Device.getDeviceHeight();

const useStyles = makeStyles(() => ({
  container: {
    flex: 5,
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
    height: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: normalize(20),
    top: normalize(130),
    position: 'absolute',
    justifyContent: 'center',
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
    marginTop: normalize(-290),
    marginBottom: normalize(30),
  },
  textND: {
    marginLeft: normalize(30),
    color: 'black',
    fontSize: normalize(18),
    fontWeight: 'bold',
  },
}));
export default useStyles;
