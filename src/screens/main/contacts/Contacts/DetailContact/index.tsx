import React from 'react';
import {View, Text, Image, StatusBar} from 'react-native';
import {styles} from './styles';
import {TouchableOpacity} from 'react-native-gesture-handler';

const DetailContact = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#2D5381" />
      <View style={styles.header}>
        <TouchableOpacity>
          <Image
            source={require('../../../../../assets/images/chevron-left.png')}
            style={styles.backButton}
          />
          
        </TouchableOpacity><Text style={styles.backname}>Trở về</Text>
      </View>
      <View style={styles.userInfo}>
        <Image
          source={require('../../../../../assets/images/Anh-co-trang-kiem-hiep-3.jpg')}
          style={styles.avatar}
        />
        <Text style={styles.fullName}>Nguyễn Trung Hải</Text>
        <Text style={styles.position}>Trưởng phòng IT</Text>
      </View>
      <View style={styles.bottomSheet}>
        <View style={styles.bottomSheetItem}>
          <View style={styles.leftItem}>
            <Text style={styles.textItem}>Số điện thoại</Text>
            <Text style={styles.phoneNumber}>0797151033</Text>
          </View>

          <TouchableOpacity>
            <Image
              source={require('../../../../../assets/images/alo.png')}
              style={styles.buttomIcon}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default DetailContact;
