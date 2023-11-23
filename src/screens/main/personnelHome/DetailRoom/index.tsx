import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {Icon} from '@rneui/themed';
import {NavigationService} from '../../../../navigation';
import {routes} from '../../../../constants';
import useStyles from './styles';
import {FlatList} from 'react-native-gesture-handler';

const DetailRoom = () => {
  const styles = useStyles();
  const renderItem = () => {
    <View>
      <View>
        <Text>Tivi</Text>
        <Text>So luong</Text>
        <Text>check</Text>
        <Text>Mo ta</Text>
      </View>
    </View>;
  };
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <View style={styles.view1}>
          <TouchableOpacity
            onPress={() => {
              NavigationService.goBack();
            }}>
            <Icon
              name="chevron-back-outline"
              type="ionicon"
              color={'black'}
              size={24}
            />
          </TouchableOpacity>
          <Text style={styles.textTitle}>Tầng 1</Text>
          <TouchableOpacity
            onPress={() => {
              NavigationService.navigate(routes.NOTIFICATIONS);
            }}>
            <Icon
              name="notifications-outline"
              type="ionicon"
              color={'black'}
              size={24}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.viewBody}>
          <Text>Danh mục tài sản</Text>
        </View>
        <View style={styles.viewCenter}>
          <TouchableOpacity style={styles.viewBtnGYC}>
            <Text style={styles.textGYC}>Tiếp nhận</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default DetailRoom;
