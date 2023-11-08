import {StyleSheet} from 'react-native';
import { fontFamilySetup } from '../../../utils/font';

export const styles = StyleSheet.create({
    container: {
      backgroundColor: '#2D5381',
      height: '100%',
      flex: 1,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 35,
      marginTop: 43,
    },
    userInfo: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: 16,
    },
    avatar: {
      width: 48,
      height: 48,
      borderRadius: 50,
      marginRight: 12,
    },
    fullName: {
      color: '#FFFFFF',
      fontSize: 16,
      fontWeight: '600',
      lineHeight: 24,
      fontFamily:fontFamilySetup.Poppins_SemiBold
    },
    bottomSheet: {
      backgroundColor: '#FFFFFF',
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      paddingLeft: 18,
      paddingRight: 18,
      paddingTop: 20,
      height: '100%',
      alignItems: 'center',
      flex: 1
    },
    buttomIcon: {
      width: 20,
      height: 20,
      marginRight: 30,
    },
    textTitle: {
      color: '#000',
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 40,
      lineHeight: 36,
      fontFamily:fontFamilySetup.Poppins_Black
      
    }
  });