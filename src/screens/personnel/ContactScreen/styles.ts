import { StyleSheet } from 'react-native';
import { fontFamilySetup } from '../../../utils/font';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height: '100%',
    flex: 1,
    paddingHorizontal:16
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F1F4F5',
    marginBottom: 10,
    borderRadius: 8,
    width: '100%'
  },
  itemLeft: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  item: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginLeft:23
  },
  title: {
    fontSize: 24,
    lineHeight: 36,
    color: '#000',
    marginTop:18,
    marginBottom: 15,
    fontWeight: 'bold',
    fontFamily: fontFamilySetup.Poppins_Bold,
    textAlign:'center'
  },
  content:{
    fontSize: 14,
    lineHeight: 21,
    marginBottom: 10,
    marginTop:36,
    marginLeft:15,
    fontWeight: 'bold',
    fontFamily: fontFamilySetup.Poppins_SemiBold
  },
  itemtitle: {
    fontSize: 14,
    lineHeight: 21,
    color: '#000',
    fontFamily: fontFamilySetup.Poppins_Medium,
    textAlign:'left'
  },
  itemPosition: {
    fontSize: 12,
    lineHeight: 18,
    fontFamily: fontFamilySetup.Poppins_Regular,
  },
  image: {
    width: 64,
    height: 64,
    borderRadius: 50,
    margin: 8,
  },
  chevronRight: {
    width: 32,
    height: 32,
    margin:24
  }
});
