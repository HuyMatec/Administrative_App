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
    backgroundColor: '#fff',
  },
  wrapper: {
    ...StyleSheet.absoluteFillObject,
  },
  view1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center', 
    top: normalize(25),
    marginLeft: normalize(24),
    marginRight: normalize(16),
  },
  view2: {
    flex: 1,
    width: '100%',
    top: normalize(HEIGHT * 0.07),
    justifyContent: 'flex-start',
    alignItems: 'center',
    
  },
  view3: {
    width: normalize(WIDTH * 0.9),
    height: normalize(150),
    borderRadius: normalize(16),
    marginBottom: normalize(20),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textTitle: {
    color: 'black',
    fontSize: normalize(16),
    fontWeight: 'bold',
  },
  textT: {
    color: 'white',
    fontSize: normalize(20),
    fontWeight: '600',
  },
  textSL: {
    color: 'white',
    fontSize: normalize(14),
    fontWeight: '500',
  },
  text: {
    color: 'white',
    fontSize: normalize(12),
    fontWeight: '300',
  },
  viewText1: {
    flex: 1,
    flexDirection: 'column',
    marginLeft: normalize(16),
    marginRight: normalize(46),
  },
  viewText2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: normalize(10),
  }
}));
export default useStyles;
