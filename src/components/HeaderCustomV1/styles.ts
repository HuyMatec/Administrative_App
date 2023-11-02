import {makeStyles, normalize} from '@rneui/themed';
import {Device} from '../../utils/device';

const WIDTH = Device.getDeviceWidth();

const useStyles = makeStyles(() => ({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewRow: {
    flexDirection: 'row',
  },
  viewCenterHeader: {
    justifyContent: 'center',
    flexDirection: 'row',
  },
  viewCenter: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewiconLeft: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewTextLeft: {
    justifyContent: 'center',
  },
  textTitle: {
    marginRight: normalize(WIDTH * 0.04),
    fontSize: normalize(22),
    fontWeight: 'bold',
    lineHeight: normalize(35.2),
    color: 'black',
  },
  leftIcon: {
    color: 'black',
  },
}));

export default useStyles;
