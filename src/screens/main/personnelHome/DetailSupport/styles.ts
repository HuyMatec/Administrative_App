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
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewRow: {
    flexDirection: 'row',
    justifyContent:'flex-start',
    alignContent: 'center',
    margin:5,
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
    margin: 20
  },
  textTitle: {
    paddingBottom: normalize(18),
    color: '#000000',
    fontSize: normalize(14),
    fontWeight: 'bold',
  },
  textSender: {
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
    flex:1
  },
  description: {
    color: '#000000',
    fontSize: normalize(12),
    marginLeft: normalize(30),
  },
  itemLeft: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 5,
    marginBottom: 20
  },
  buttomIcon: {
    width: 47,
    height: 47
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
  viewBT:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width:normalize(WIDTH*0.9),
  },
  viewBtn: {
    flex: 1,
    height: normalize(46),
    marginTop: normalize(HEIGHT * 0.04),
    borderRadius: normalize(9),
    justifyContent: 'center',
    alignItems: 'center',
    margin:10
  },
  viewMB: {
    width: '100%',
  },
  viewInput: {
    width: '100%',
    height: normalize(HEIGHT * 0.2),
    textAlignVertical: 'top',
  },
  viewBox1: {
    width: normalize(WIDTH * 0.5),
    backgroundColor: '#F1F4F5',
    borderColor: '#D9D9D9',
    borderWidth: normalize(0.5),
  },
  viewBox2: {
    width: normalize(WIDTH * 0.3),
    backgroundColor: '#F1F4F5',
    borderColor: '#D9D9D9',
    borderWidth: normalize(0.5),
  },
  viewInputItem: {
    fontSize: normalize(15),
    justifyContent:'flex-start'
  },
  viewItem: {
    textAlign: 'auto',
    borderColor: '#D9D9D9',
    borderBottomWidth: normalize(0.1),
  },
  itemSelect: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft:normalize(12),
    marginRight:normalize(12),
    marginBottom: 10
  },
}));
export default useStyles;
