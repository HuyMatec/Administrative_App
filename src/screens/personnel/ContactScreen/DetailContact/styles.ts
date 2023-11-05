import {StyleSheet} from 'react-native';
import { fontFamilySetup } from '../../../../utils/font';
export const styles = StyleSheet.create({
    container: {
      backgroundColor: '#2D5381',
      height: '100%',
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      marginBottom: 22,
      marginLeft: 24,
      marginTop: 37,
    },
    backButton: {
      width: 20,
      height: 20,
    },
    backname: {
      color: '#FFFFFF',
      fontSize: 14,
      lineHeight: 20,
      fontWeight: '400',
      fontFamily:fontFamilySetup.Poppins_Medium,
      marginLeft:10
    },
    userInfo: {
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 50,
    },
    avatar: {
      width: 80,
      height: 80,
      borderRadius: 50,
      marginBottom: 8,
    },
    fullName: {
      color: '#FEFEFE',
      fontSize: 24,
      marginBottom: 8,
      lineHeight: 27,
      fontFamily: fontFamilySetup.Poppins_SemiBold
    },
    position: {
      color: '#FFFFFF',
      fontSize: 18,
      lineHeight: 27,
      fontWeight: '400',
      fontFamily:fontFamilySetup.Poppins_Regular
    },
    bottomSheet: {
      backgroundColor: '#FFFFFF',
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      height: '100%',
    },
    bottomSheetItem: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      margin:40
    },
    leftItem: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'flex-start'
    },
    buttomIcon: {
      width: 47,
      height: 47
    },
    textItem: {
      fontSize: 18,
      fontWeight: '400',
      lineHeight: 27,
      color: '#999999',
      fontFamily:fontFamilySetup.Poppins_Regular
    },
    phoneNumber: {
      color: '#000',
      fontSize: 18,
      lineHeight: 27,
      fontWeight: '400',
      fontFamily:fontFamilySetup.Poppins_Regular
    },
  });
