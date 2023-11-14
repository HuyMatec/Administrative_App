import {
  View,
  Text,
  StatusBar,
  FlatList,
  ListRenderItemInfo,
} from 'react-native';
import React from 'react';
import useStyles from './styles';
import {Icon} from '@rneui/themed';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {NavigationService} from '../../../../navigation';
import {routes} from '../../../../constants';
import {data, dataFloor, floorProps} from '../BuildingScreen/types';

const FloorScreen = () => {
  const styles = useStyles();
  const renderItem = ({item}: ListRenderItemInfo<floorProps>) => (
    <TouchableOpacity>
      <View style={styles.viewItem}>
        <Text style={styles.textRoom}>{item.room}</Text>
      </View>
    </TouchableOpacity>
  );
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
          <FlatList
            data={dataFloor}
            renderItem={renderItem}
            keyExtractor={item => item.id.toString()}
            numColumns={5}
          />
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

export default FloorScreen;
