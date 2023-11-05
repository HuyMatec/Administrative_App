import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {Button} from '@rneui/base';
import React from 'react';
import {View, Text, Image, StatusBar} from 'react-native';
import {useAppDispatch} from '../../hooks';
import {AuthActions} from '../../redux';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {styles} from './styles';
import SwitchComponent from './components/Switch';

const SettingsScreen = () => {
  const dispatch = useAppDispatch();

  async function onGoogleSignOutButtonPress() {
    return GoogleSignin.signOut();
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#2D5381" />
      <View style={styles.header} />
      <View style={styles.userInfo}>
        <Image
          source={require('../../../../assets/images/Anh-co-trang-kiem-hiep-3.jpg')}
          style={styles.avatar}
        />
        <Text style={styles.fullName}>Nguyễn Trung Hải</Text>
        <Text style={styles.phoneNumber}>0797151033</Text>
      </View>
      <View style={styles.bottomSheet}>
        <TouchableOpacity>
          <View style={styles.bottomSheetItem}>
            <Image
              source={require('../../../../assets/images/user.png')}
              style={styles.buttomIcon}
            />
            <Text style={styles.textItem}>Chỉnh sửa tài khoản</Text>
            <Image
              source={require('../../../../assets/images/chevron-right.png')}
              style={{width: 20, height: 20, marginRight: 15}}
            />
          </View>
        </TouchableOpacity>

        <View style={styles.bottomSheetItem}>
          <Image
            source={require('../../../../assets/images/notify.png')}
            style={styles.buttomIcon}
          />
          <Text style={styles.textItem}>Tắt thông báo</Text>
          <SwitchComponent/>
        </View>
        <TouchableOpacity>
          <View style={styles.bottomSheetItem}>
            <Image
              source={require('../../../../assets/images/logout.png')}
              style={styles.buttomIcon}
            />
            <Text
              style={styles.textItem}
              onPress={() =>
                onGoogleSignOutButtonPress().then(() => {
                  return dispatch(AuthActions.handleLogout());
                })
              }>
              Đăng xuất
            </Text>
            <View style={{width: 20, height: 20}} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SettingsScreen;
