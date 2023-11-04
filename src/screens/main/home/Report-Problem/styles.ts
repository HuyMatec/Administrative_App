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
    height: normalize(HEIGHT * 0.2),
    textAlignVertical: 'top',
  },
  viewCenter: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewBocBtn: {
    flex: 4,
    width: normalize(WIDTH * 0.86),
    height: normalize(60),
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  viewBtn: {
    flex: 2,
    width: 'auto',
    height: normalize(44),
    borderWidth: 1,
    borderRadius: normalize(9),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F1F4F5',
  },
  viewBocImage: {
    flex: 4,
    width: normalize(WIDTH * 0.86),
    height: normalize(60),
    marginTop: normalize(60),
    marginBottom: normalize(30),
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  viewBtnGYC: {
    width: normalize(WIDTH * 0.86),
    height: normalize(46),
    marginTop: normalize(HEIGHT * 0.039),
    backgroundColor: '#3257C6',
    borderRadius: normalize(9),
    justifyContent: 'center',
    alignItems: 'center',
  },
  textGYC: {
    color: 'white',
    fontSize: normalize(14),
    fontWeight: 'bold',
  },
  imageCG: {
    width: normalize(WIDTH * 0.42),
    height: normalize(HEIGHT * 0.2),
  },
}));
export default useStyles;
