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
  viewInputItem: {
    marginLeft: normalize(-12),
    fontSize: normalize(15),
  },
  viewItem: {
    textAlign: 'center',
    paddingVertical: normalize(6),
    borderColor: '#D9D9D9',
    borderBottomWidth: normalize(0.5),
  },
  viewPD: {
    paddingHorizontal: normalize(11),
  },
  viewBox: {
    width: '100%',
    backgroundColor: '#F1F4F5',
    borderColor: '#D9D9D9',
    borderWidth: normalize(0.5),
  },
  viewMTB: {
    marginTop: normalize(40),
    marginBottom: normalize(30),
  },
  viewMB: {
    marginBottom: normalize(30),
  },
  viewInput: {
    width: '100%',
    height: normalize(200),
    textAlignVertical: 'top',
  },
  viewCenter: {justifyContent: 'center', alignItems: 'center'},
  viewBocBtn: {
    flex: 4,
    width: normalize(340),
    height: normalize(60),
    marginTop: normalize(20),
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  viewBtn: {
    flex: 2,
    width: normalize(30),
    height: normalize(44),
    borderWidth: 1,
    borderRadius: normalize(9),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F1F4F5',
  },
  viewBtnGYC: {
    width: '100%',
    height: normalize(46),
    marginTop: normalize(80),
    backgroundColor: '#3257C6',
    borderRadius: normalize(16),
    justifyContent: 'center',
    alignItems: 'center',
  },
  textGYC: {
    color: 'white',
    fontSize: normalize(16),
    fontWeight: 'bold',
  },
}));
export default useStyles;
