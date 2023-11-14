import {GoogleSignin} from '@react-native-google-signin/google-signin';
import React, {useState} from 'react';
import {Image, Text, TouchableOpacity, View ,StatusBar} from 'react-native';
import {useAppDispatch} from '../../../../hooks';
import {AuthActions} from '../../../../redux';
import useStyles from './styles';
import {Icon} from '@rneui/themed';

const SettingScreen = () => {
  const dispatch = useAppDispatch();

  async function onGoogleSignOutButtonPress() {
    dispatch(AuthActions.handleLogoutGoogle());
    return GoogleSignin.signOut();
  }
  const styles = useStyles();

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#2D5381" />
      <View style={styles.body}>
        <View style={styles.view1}>
          <View style={styles.viewCenter}>
            <Image
              source={{
                uri: 'https://www.nhaban.vn/gallery.nb/estates/5259229/medium/29_62fa079ca892b.jpg',
              }}
              style={styles.viewImage}
            />
            <Text style={styles.textFullName}>Nguyễn Trung Hải</Text>
            <Text style={styles.textPosition}>0797151033</Text>
          </View>
        </View>
      </View>

      <View style={styles.view2}>
        <View>
          <TouchableOpacity style={[styles.viewRow, styles.viewItem]}>
            <Icon
              name="person-outline"
              type="ionicon"
              size={24}
              color={'#000000'}
              style={styles.icon}
            />
            <View style={{flex: 3}}>
              <Text style={styles.text}>Chỉnh sửa tài khoản</Text>
            </View>
            <TouchableOpacity>
              <Icon
                name="chevron-back-outline"
                type="ionicon"
                size={24}
                color={'#000000'}
                style={styles.iconTransform}
              />
            </TouchableOpacity>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            style={[styles.viewRow, styles.viewItem]}
            onPress={onGoogleSignOutButtonPress}>
            <Icon
              name="log-out-outline"
              type="ionicon"
              size={24}
              color={'#000000'}
              style={styles.icon}
            />
            <View style={{flex: 3}}>
              <Text style={styles.text}>Đăng xuất</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SettingScreen;
