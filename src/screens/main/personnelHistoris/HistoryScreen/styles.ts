import {makeStyles, normalize} from '@rneui/themed';
import {StyleSheet} from 'react-native';
import {Device} from '../../../../utils/device';

const WIDTH = Device.getDeviceWidth();
const HEIGHT = Device.getDeviceHeight();

const useStyles = makeStyles(() => ({
  container: {
    flex: 1,
  },
  wrapper: {
    ...StyleSheet.absoluteFillObject,
  },
  viewRow: {
    flexDirection: 'row',
    justifyContent:'center',
    alignItems: 'center'
  },
  view2: {
    flex: 1,
    width: '100%',
    height: normalize(HEIGHT),
    backgroundColor: '#FFFFFF'
  },
  viewItem: {
    justifyContent: 'center',
    backgroundColor: '#F1F4F5',
    borderRadius: normalize(9),
    marginVertical: normalize(6),
    marginLeft: normalize(16),
    marginRight: normalize(16),
    marginTop: normalize(10),
  },
  viewImage: {
    width: normalize(48),
    height: normalize(48),
    backgroundColor: '#FFF',
    borderRadius: normalize(100),
  },
  viewImageItem: {
    width: normalize(WIDTH * 0.14),
    height: normalize(HEIGHT * 0.07),
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
    paddingLeft: normalize(15),
    paddingBottom: normalize(15),
    paddingTop: normalize(15),
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