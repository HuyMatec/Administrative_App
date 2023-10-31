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
import HistoryList from './components/HistoryList';

const HistoryScreen = () => {

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#2D5381" />
      <View style={styles.header}>
        <View style={styles.userInfo}>
          <Image
            source={require('../../assets/images/Anh-co-trang-kiem-hiep-3.jpg')}
            style={styles.avatar}
          />
          <Text style={styles.fullName}>Nguyễn Trung Hải</Text>
        </View>
        <TouchableOpacity>
          <Image
            source={require('../../assets/images/bell.png')}
            style={styles.buttomIcon}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.bottomSheet}>
        <Text style={styles.textTitle}>Lịch sử</Text>
        <HistoryList/>
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
  },
  bottomSheet: {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 18,
    height: '100%',
    alignItems: 'center'
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
    
  }
});

export default HistoryScreen;
