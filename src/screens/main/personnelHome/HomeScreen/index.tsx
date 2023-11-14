import {Icon} from '@rneui/themed';
import React from 'react';
import {Image, Text, TouchableOpacity, View, StatusBar} from 'react-native';
import useStyles from './styles';
import {NavigationService} from '../../../../navigation';
import {routes} from '../../../../constants';

const HomeScreen = () => {
  const styles = useStyles();

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#2D5381" />
      <View style={styles.body}>
        <View style={styles.view1}>
          <Image
            source={{
              uri: 'https://www.nhaban.vn/gallery.nb/estates/5259229/medium/29_62fa079ca892b.jpg',
            }}
            style={styles.viewImage}
          />
          <Text style={styles.textFullName}>Nguyễn Trung Hải</Text>
          <TouchableOpacity
            onPress={() => {
              NavigationService.navigate(routes.NOTIFICATIONS);
            }}>
            <Icon
              name="notifications-outline"
              type="ionicon"
              color={'white'}
              size={24}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.view2}>
        <Text style={styles.textDV}>Dịch vụ trực tuyến</Text>
        <TouchableOpacity
          style={styles.view3}
          onPress={() => {
            NavigationService.navigate(routes.SUPPORT_PROBLEM);
          }}>
          <Icon name="create" color={'#2D5381'} type="ionicon" size={36} />
          <Text style={styles.textND}>Sự cố cần hỗ trợ</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.view3}
          onPress={() => {
            NavigationService.navigate(routes.CLASSROOMS);
          }}>
          <Icon name="grid" color={'#2D5381'} type="ionicon" size={36} />
          <Text style={[styles.textND, {width: 200}]}>
            Tính sẵn sàng phòng học
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;
