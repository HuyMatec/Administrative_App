import {Colors, makeStyles, normalize} from '@rneui/themed';
import {StyleSheet} from 'react-native';
import {Device} from '../../../utils/device';

const WIDTH = Device.getDeviceWidth();
const HEIGHT = Device.getDeviceHeight();

const useStyles = makeStyles(() => ({
  container: {
    flex: 5,
    backgroundColor: '#F0F0F0',
  },
  wrapper: {
    ...StyleSheet.absoluteFillObject,
  },
  view1: {
    flex: normalize(1.2),
    backgroundColor: '#2D5381',
    borderBottomStartRadius: normalize(22),
    borderBottomEndRadius: normalize(22),
  },
  viewBackground: {
    marginTop: normalize(130),
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewBackroundMain: {
    width: '80%',
    height: normalize(530),
    position: 'absolute',
    backgroundColor: '#fff',
    borderRadius: normalize(26),
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewItem: {
    textAlign: 'center',
    paddingVertical: normalize(6),
    borderColor: '#D9D9D9',
    borderBottomWidth: normalize(0.5),
  },
  viewBackgroundItem: {
    marginTop: normalize(100),
    marginBottom: normalize(36),
  },
  viewBtnGoogle: {
    width: normalize(160),
    height: normalize(39),
    borderRadius: normalize(6),
    backgroundColor: '#3257C6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textGoogle: {
    color: 'white',
    fontSize: normalize(16),
    fontWeight: 'bold',
    marginLeft: normalize(9),
  },
  viewBox: {
    backgroundColor: '#F1F4F5',
    borderColor: '#D9D9D9',
    borderWidth: normalize(0.5),
  },
}));
export default useStyles;
