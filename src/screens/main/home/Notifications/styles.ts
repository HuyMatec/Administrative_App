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
    width: '100%',
    height: normalize(130),
    justifyContent: 'center',
    padding: normalize(12),
    backgroundColor: '#f0f0f0',
    borderRadius: normalize(9),
    marginVertical: normalize(5),
  },
  textTitle: {
    color: 'black',
    fontSize: normalize(19),
    fontWeight: 'bold',
  },
  textPoster: {
    marginVertical: normalize(4),
    color: '#9B9B9B',
    fontSize: normalize(14),
  },
  textDateAndTime: {
    color: '#9B9B9B',
    fontSize: normalize(14),
  },
}));
export default useStyles;
