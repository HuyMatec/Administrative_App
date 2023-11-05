import {GoogleSignin} from '@react-native-google-signin/google-signin';
import React, {useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {useAppDispatch} from '../../../../hooks';
import {AuthActions} from '../../../../redux';
import useStyles from './styles';
import {Icon} from '@rneui/themed';

const SettingsScreen = () => {
  const dispatch = useAppDispatch();

  async function onGoogleSignOutButtonPress() {
    dispatch(AuthActions.handleLogoutGoogle());
    return GoogleSignin.signOut();
  }

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const styles = useStyles();

  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <View style={styles.view1}>
          <View style={styles.viewCenter}>
            <Image
              source={{
                uri: 'https://cdn3d.iconscout.com/3d/premium/thumb/colombian-people-9437719-7665524.png?f=webp',
              }}
              style={styles.viewImage}
            />
            <Text style={styles.textFullName}>Nguyễn Văn A</Text>
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
          <View style={[styles.viewRow, styles.viewItem]}>
            <Icon
              name="notifications-outline"
              type="ionicon"
              size={24}
              color={'#000000'}
              style={styles.icon}
            />
            <View style={{flex: 3}}>
              <Text style={styles.text}>Tắt thông báo</Text>
            </View>
            <TouchableOpacity
              style={[styles.outter, isEnabled ? styles.off : styles.on]}
              onPress={toggleSwitch}
              activeOpacity={3}>
              <View style={isEnabled ? styles.innerOFF : styles.innerON} />
            </TouchableOpacity>
          </View>
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

export default SettingsScreen;
