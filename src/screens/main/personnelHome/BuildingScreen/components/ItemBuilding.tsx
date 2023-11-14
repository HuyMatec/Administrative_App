import {
  View,
  Text,
  FlatList,
  ListRenderItemInfo,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {buildingProps, data} from '../types';
import {Icon} from '@rneui/themed';
import useStyles from '../styles';
import { NavigationService } from '../../../../../navigation';
import { routes } from '../../../../../constants';
const ItemBuilding = () => {
  const styles = useStyles();
  const renderItem = ({item}: ListRenderItemInfo<buildingProps>) => (
    <TouchableOpacity onPress={() => NavigationService.navigate(routes.FLOORSCREEN, {item})}>
      <View style={styles.viewItem}>
        <Icon
          name="home"
          type="ionicon"
          color={'#FFEC86'}
          size={24}
          style={styles.viewLeft}
        />
        <Text style={[styles.textFloor, styles.viewLeft]}>{item.name}</Text>
        <Text style={[styles.textRoom, styles.viewLeft]}>{item.rooms}</Text>
      </View>
    </TouchableOpacity>
  );
  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.id.toString()}
      numColumns={3}
    />
  );
};

export default ItemBuilding;
