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
      width: 24,
      height: 24,
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
      color: '#FFFFFF',
      fontSize: 18,
      marginBottom: 8,
      lineHeight: 27,
      fontFamily: fontFamilySetup.Poppins_Bold
    },
    phoneNumber: {
      color: '#FFFFFF',
      fontSize: 16,
      lineHeight: 24,
      fontWeight: '400',
    },
    bottomSheet: {
      backgroundColor: '#FFFFFF',
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      padding: 24,
      height: '100%',
    },
    bottomSheetItem: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom:20
    },
    buttomIcon: {
      width: 48,
      height: 48,
    },
    textItem: {
      fontSize: 14,
      fontWeight: '400',
      lineHeight: 21,
      color: '#000000',
      width: '60%',
    },
  });