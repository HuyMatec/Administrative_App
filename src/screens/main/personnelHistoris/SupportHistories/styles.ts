import { makeStyles, normalize } from '@rneui/themed';
import { StyleSheet } from 'react-native';
import { Device } from '../../../../utils/device';

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
    marginTop: normalize(20),
    backgroundColor: '#F1F4F5',
    borderRadius: normalize(9),
    justifyContent: 'center',
  },
  viewItem1: {
    backgroundColor: '#F1F4F5',
    borderRadius: normalize(9),
    justifyContent: 'center',
    elevation: 2,
  },
  viewImage: {
    width: normalize(WIDTH * 0.12),
    height: normalize(HEIGHT * 0.06),
    margin: normalize(12),
    borderRadius: normalize(100),
    backgroundColor: '#FFFFFF',
  },
  viewTextLeft: {
    flex: 2,
    paddingLeft: normalize(12),
  },
  view: {
    margin: 10
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
  textReciever1: {
    color: '#000000',
    fontSize: normalize(16),
    fontWeight: 'bold',
  },
  textPhone: {
    color: '#000000',
    fontSize: normalize(14),
    fontWeight: 'normal',
  },
  texttitle: {
    color: '#000000',
    fontSize: normalize(14),
    fontWeight: 'bold',
  },
  text: {
    color: '#000000',
    fontSize: normalize(12),
    fontWeight: 'normal',
  },
  text1: {
    color: '#000000',
    fontSize: normalize(12),
    fontWeight: 'normal',
    margin: normalize(22),
  },
  textState: {
    paddingTop: normalize(20),
    color: '#000000',
    fontSize: normalize(14),
    fontWeight: 'bold',
  },
  viewBtnPH: {
    width: normalize(WIDTH * 0.86),
    height: normalize(46),
    marginTop: normalize(HEIGHT * 0.039),
    backgroundColor: '#FFFF',
    borderRadius: normalize(9),
    borderWidth: 1,
    borderColor: '#2245AC',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textPH: {
    color: '#2245AC',
    fontSize: normalize(14),
    fontWeight: 'bold',
  },
  listView: {
    marginTop: normalize(20),
  },
  title: {
    color: '#000000',
    fontSize: normalize(14),
    marginLeft: normalize(30),
  },
  description: {
    color: '#000000',
    fontSize: normalize(12),
    marginLeft: normalize(30),
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    borderRadius: 8,
    width: '100%'
  },
  itemLeft: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    margin: 5
  },
  item: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginLeft: 23
  },
  buttomIcon: {
    width: 47,
    height: 47
  },
}));
export default useStyles;
