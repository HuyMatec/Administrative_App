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
  textTitle: {
    color: 'black',
    fontSize: normalize(16),
    fontWeight: 'bold',
  },
 viewBody:{
   flex: 1,
   width: '100%',
   top: normalize(HEIGHT * 0.05),
   justifyContent: 'space-around',
   alignItems: 'center',
 },
 viewItem:{
   flexDirection: 'column',
   justifyContent: 'center',
   alignItems: 'center',
   backgroundColor: '#E9ECEF',
   width: normalize(47),
   height: normalize(47),
   borderRadius: normalize(9),
   margin: 10
 },
 textRoom:{
   color: '#000',
   fontSize: normalize(12),
   fontWeight: '400',
 },
 viewBtnGYC: {
  width: normalize(WIDTH * 0.86),
  height: normalize(46),
  marginTop: normalize(HEIGHT * 0.04),
  borderRadius: normalize(9),
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#3257C6',
},
textGYC: {
  color: 'white',
  fontSize: normalize(14),
  fontWeight: 'bold',
},
viewCenter: {
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: normalize(40),
},
}));
export default useStyles;
