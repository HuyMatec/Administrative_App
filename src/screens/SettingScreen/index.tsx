import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import React from 'react';

const SettingScreen = () => {
  return (
    <View style={styles.container}>
        <StatusBar
        barStyle="light-content"
        backgroundColor="#2D5381"
      />
      <View style={styles.header}/>
      <View style={styles.userInfo}>
        <Image
          source={require('../../assets/images/Anh-co-trang-kiem-hiep-3.jpg')}
          style={styles.avatar}
        />
        <Text style={styles.fullName}>Nguyễn Trung Hải</Text>
        <Text style={styles.phoneNumber}>0797151033</Text>
      </View>
      <View style={styles.bottomSheet}>
        <TouchableOpacity>
          <View style={styles.bottomSheetItem}>
            <Image
              source={require('../../assets/images/user.png')}
              style={styles.buttomIcon}
            />
            <Text style={styles.textItem}>Chỉnh sửa tài khoản</Text>
            <Image
              source={require('../../assets/images/chevron-right.png')}
              style={{width: 20, height: 20}}
            />
          </View>
        </TouchableOpacity>

        <View style={styles.bottomSheetItem}>
          <Image
            source={require('../../assets/images/notify.png')}
            style={styles.buttomIcon}
          />
          <Text style={styles.textItem}>Tắt thông báo</Text>
          <TouchableOpacity>
            <Image
              source={require('../../assets/images/chevron-right.png')}
              style={{width: 20, height: 20}}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
          <View style={styles.bottomSheetItem}>
            <Image
              source={require('../../assets/images/logout.png')}
              style={styles.buttomIcon}
            />
            <Text style={styles.textItem}>Đăng xuất</Text>
            <View style={{width: 20, height: 20}} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
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
    fontWeight: 'bold',
    marginBottom: 8,
    lineHeight: 27,
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

export default SettingScreen;
