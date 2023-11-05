import {View, Text, StatusBar, Image} from 'react-native';
import React from 'react';
import { styles } from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import HistoryList from './components/HistoryList';

const HistoriesScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#2D5381" />
      <View style={styles.header}>
        <View style={styles.userInfo}>
          <Image
            source={require('../../../../assets/images/Anh-co-trang-kiem-hiep-3.jpg')}
            style={styles.avatar}
          />
          <Text style={styles.fullName}>Nguyễn Trung Hải</Text>
        </View>
        <TouchableOpacity>
          <Image
            source={require('../../../../assets/images/bell.png')}
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

export default HistoriesScreen;
