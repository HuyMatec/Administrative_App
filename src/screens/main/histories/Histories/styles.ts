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
  viewRow: {
    flexDirection: 'row',
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
  viewCenter: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewItem: {
    width: normalize(WIDTH * 0.9),
    height: normalize(HEIGHT * 0.12),
    justifyContent: 'center',
    backgroundColor: '#F1F4F5',
    borderRadius: normalize(9),
    marginVertical: normalize(6),
  },
  viewImage: {
    width: normalize(48),
    height: normalize(48),
    backgroundColor: '#FFF',
    borderRadius: normalize(100),
  },
  viewImageItem: {
    width: normalize(WIDTH * 0.19),
    height: normalize(HEIGHT * 0.088),
    margin: normalize(12),
    borderRadius: normalize(100),
    backgroundColor: '#FFFFFF',
  },
  textFullName: {
    width: normalize(WIDTH * 0.68),
    marginLeft: normalize(9),
    color: 'white',
    fontSize: normalize(18),
    fontWeight: 'bold',
    marginVertical: normalize(12),
  },
  textLS: {
    color: 'black',
    fontSize: normalize(23),
    fontWeight: 'bold',
    marginTop: normalize(HEIGHT * 0.05),
    marginBottom: normalize(HEIGHT * 0.02),
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
}));
export default useStyles;
