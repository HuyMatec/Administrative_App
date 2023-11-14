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
   justifyContent: 'space-around',
   alignItems: 'flex-start',
   width: normalize(WIDTH * 0.26),
   height: normalize(HEIGHT * 0.15),
   backgroundColor: '#FFF5BF',
   borderRadius: normalize(9),
   margin: 10
 },
 textFloor:{
   color: '#383838',
   fontSize: normalize(16),
   fontWeight: '600',
 },
 textRoom:{
   color: '#A39DA9',
   fontSize: normalize(14),
   fontWeight: '400',
 },
 viewLeft:{
   marginLeft: 10,
 }
}));
export default useStyles;
