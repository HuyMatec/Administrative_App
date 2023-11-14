import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  ListRenderItemInfo,
  Alert,
} from 'react-native';
import React from 'react';
import useStyles from '../../HistoryScreen/styles';
import {ItemProps, data} from '../types';
import {NavigationService} from '../../../../../navigation';
import {routes} from '../../../../../constants';

const Item = () => {
  const styles = useStyles();
  const renderItem = ({item}: ListRenderItemInfo<ItemProps>) => {
    const onClick = () => {
      NavigationService.navigate(routes.SUPPORTHISTORIES, {item});
    };
    return (
      <TouchableOpacity onPress={onClick}>
        <View style={styles.viewItem}>
          <View style={styles.viewRow}>
            <View style={styles.viewTextLeft}>
              <Text style={styles.textTitle}>{item.title}</Text>
              <Text style={styles.textReciever}>
                Người tiếp nhận: {item.reciever}
              </Text>
              <View style={[styles.viewRow, {justifyContent: 'space-between'}]}>
                <View>
                  <Text style={styles.text}>{item.date}</Text>
                </View>
                <View>
                  <Text style={styles.text}>{item.time}</Text>
                </View>
                <View>
                  <Text style={styles.text}>Phòng:{item.room}</Text>
                </View>
              </View>
            </View>
            <View style={{flex: 0.8}}>
              <Image
                source={{
                  uri: item.imageURL,
                }}
                style={styles.viewImageItem}
              />
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      showsVerticalScrollIndicator={false}
      style={{width: '100%', height: '90%'}}
    />
  );
};

export default Item;
