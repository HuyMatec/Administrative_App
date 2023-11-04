import {makeStyles, normalize} from '@rneui/themed';
import {StyleSheet} from 'react-native';
import {Device} from '../../../../utils/device';

const WIDTH = Device.getDeviceWidth();
const HEIGHT = Device.getDeviceHeight();

const useStyles = makeStyles(() => ({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  wrapper: {
    ...StyleSheet.absoluteFillObject,
  },
  body: {
    paddingHorizontal: normalize(12),
  },
  viewCenter: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewRow: {
    flexDirection: 'row',
  },
  viewItem: {
    width: normalize(WIDTH * 0.9),
    height: normalize(HEIGHT * 0.12),
    marginTop: normalize(20),
    backgroundColor: '#F1F4F5',
    borderRadius: normalize(9),
  },
  viewImage: {
    width: normalize(WIDTH * 0.19),
    height: normalize(HEIGHT * 0.088),
    margin: normalize(12),
    borderRadius: normalize(100),
    backgroundColor: '#FFFFFF',
  },
  viewTextLeft: {
    flex: 2,
    paddingLeft: normalize(12),
  },
  textTitle: {
    paddingBottom: normalize(18),
    color: '#000000',
    fontSize: normalize(14),
    fontWeight: 'bold',
  },
  textReciever: {
    paddingBottom: normalize(4),
    color: '#000000',
    fontSize: normalize(12),
    fontWeight: 'normal',
  },
  text: {
    color: '#000000',
    fontSize: normalize(12),
    fontWeight: 'normal',
  },
  textState: {
    paddingTop: normalize(10),
    color: '#000000',
    fontSize: normalize(14),
    fontWeight: 'bold',
  },
  viewBtnPH: {
    width: normalize(WIDTH * 0.86),
    height: normalize(46),
    marginTop: normalize(HEIGHT * 0.039),
    backgroundColor: '#FFFF',
    borderRadius: normalize(9),
    borderWidth: 1,
    borderColor: '#2245AC',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textPH: {
    color: '#2245AC',
    fontSize: normalize(14),
    fontWeight: 'bold',
  },
}));
export default useStyles;
