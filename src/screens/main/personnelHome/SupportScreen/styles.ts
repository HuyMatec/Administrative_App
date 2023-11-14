import { makeStyles, normalize } from '@rneui/themed';
import { StyleSheet } from 'react-native';
import { Device } from '../../../../utils/device';

const WIDTH = Device.getDeviceWidth();
const HEIGHT = Device.getDeviceHeight();

const useStyles = makeStyles(() => ({
  container: {
    flex: 1,
    backgroundColor: '#2D5381',
  },
  wrapper: {
    ...StyleSheet.absoluteFillObject,
  },
  view1: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    top: normalize(15),
    marginLeft: normalize(24),
    marginRight: normalize(16),
  },
  view2: {
    height: normalize(HEIGHT * 0.85),
    backgroundColor: '#FFFFFF',
    borderRadius: normalize(10),
  },
  view3: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  view4: {
    width:normalize(WIDTH * 0.5),
    height: normalize(HEIGHT * 0.05),
    justifyContent: 'center',
    alignItems: 'center',
  },
  view5: {
    width:normalize(WIDTH * 0.5),
    height: normalize(HEIGHT * 0.05),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: normalize(10),
    borderBottomWidth: 1
  },
  text1: {
    color: '#4169E1',
    fontSize: normalize(12),
    fontWeight: 'bold',
  },
  text2: {
    color: '#B3C3F3',
    fontSize: normalize(12),
    fontWeight: 'bold',
  },
  ViewItem: {
    backgroundColor: '#ffffff',
    borderRadius: normalize(10),
    borderBottomColor: '#F1F4F5',
    elevation: 3,
    marginLeft: normalize(16),
    marginRight: normalize(16),
    marginBottom: normalize(14),
  },
  viewItem1: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignContent: 'center',
  },
  viewTextLeft: {
    flex: 1,
    paddingLeft: normalize(15),
    paddingBottom: normalize(15),
    paddingTop: normalize(15),
  },
  viewItem2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    paddingRight: normalize(15),
  },
  viewItem3: {
    width:normalize(WIDTH * 0.6),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
  },
  textTitle: {
    paddingBottom: normalize(18),
    color: '#000000',
    fontSize: normalize(14),
    fontWeight: 'bold',
  },
  textTime: {
    color: '#D0C02B',
    fontSize: normalize(12),
    fontWeight: '500',
  },
  textSender: {
    paddingBottom: normalize(4),
    color: '#000000',
    fontSize: normalize(12),
    fontWeight: '500',
  },
  text: {
    color: '#8C8C8C',
    fontSize: normalize(12),
    fontWeight: '500',
  },
  viewImageItem: {
    width: normalize(WIDTH * 0.1),
    height: normalize(HEIGHT * 0.05),
    borderRadius: normalize(50),
  },
  viewLeft: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: normalize(15),
  }
}));
export default useStyles;
