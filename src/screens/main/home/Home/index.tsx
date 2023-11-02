import {Icon} from '@rneui/themed';
import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import useStyles from './styles';
import {NavigationService} from '../../../../navigation';
import {routes} from '../../../../constants';

const HomeScreen = () => {
  const styles = useStyles();

  return (
    <View style={styles.container}>
      <View style={{flex: 1, backgroundColor: '#2D5381'}}>
        <View style={styles.view1}>
          <Image
            source={{
              uri: 'https://openbookings.co.za/wp-content/uploads/Hi-Profile-V3.jpg',
            }}
            style={styles.viewImage}
          />
          <Text style={styles.textFullName}>Nguyễn Văn A</Text>
          <Icon
            name="notifications-outline"
            type="ionicon"
            color={'white'}
            size={24}
          />
        </View>
      </View>

      <View style={styles.view2}>
        <Text style={styles.textDV}>Dịch vụ trực tuyến</Text>
        <TouchableOpacity
          style={styles.view3}
          onPress={() => {
            NavigationService.navigate(routes.REPORT_PROBLEM);
          }}>
          <Icon name="create" color={'#2D5381'} type="ionicon" size={36} />
          <Text style={styles.textND}>Báo cáo sự cố</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.view3}>
          <Icon
            name="logo-ionitron"
            color={'#2D5381'}
            type="ionicon"
            size={36}
          />
          <Text style={styles.textND}>Yêu cầu hỗ trợ CNTT</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.view3}>
          <Icon name="grid" color={'#2D5381'} type="ionicon" size={36} />
          <Text style={[styles.textND, {width: 200}]}>
            Quản lý mượn phòng học, hội trường
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;
