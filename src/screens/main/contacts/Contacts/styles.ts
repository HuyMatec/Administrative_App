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
    top: normalize(HEIGHT * 0.09),
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
    width: normalize(WIDTH * 0.73),
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
  textPhoneNumber: {
    color: '#858585',
    fontSize: normalize(16),
    fontWeight: 'normal',
    marginBottom: normalize(6),
  },
  textNumber: {
    color: '#000000',
    fontSize: normalize(16),
    fontWeight: 'normal',
  },
  iconContact: {
    width: normalize(44),
    height: normalize(44),
    borderRadius: normalize(100),
    backgroundColor: '#e6e6e6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemContact: {
    height: normalize(69),
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: normalize(24),
    marginVertical: normalize(6),
    paddingHorizontal: normalize(12),
    borderWidth: normalize(0.6),
    borderRadius: normalize(16),
    backgroundColor: 'rgba(224, 224, 224, 0.4)',
  },
  image: {
    width: normalize(56),
    height: normalize(56),
    backgroundColor: 'white',
    borderRadius: normalize(100),
  },
  textFN: {
    fontSize: normalize(16),
    color: '#000',
    fontWeight: 'bold',
    marginBottom: normalize(9),
  },
  textP: {
    fontSize: normalize(13),
    color: 'rgba(0, 0, 0, 0.32)',
  },
  textTitleRoom: {
    fontSize: normalize(16),
    color: 'rgba(0, 0, 0, 0.32)',
    fontWeight: 'bold',
    marginLeft: normalize(19),
    marginBottom: normalize(19),
  },
  viewHeader: {
    height: normalize(60),
    backgroundColor: '#2D5381',
  },
  titleStyleHeader: {
    fontSize: normalize(22),
    fontWeight: 'normal',
    color: 'white',
  },
  viewItem1: {
    marginTop: normalize(12),
    height: normalize(300),
  },
  viewHeight1: {
    height: normalize(244),
  },
  viewHeight2: {
    height: normalize(330),
  },
}));
export default useStyles;
