import React from 'react';
import {FlatList, Text, View} from 'react-native';
import useStyles from '../../styles';
import {ItemProps, data} from '../../types';

const Item = () => {
  const styles = useStyles();

  const Item = (itemProps: ItemProps) => (
    <View style={styles.viewItem}>
      <Text style={styles.textTitle}>{itemProps.title}</Text>
      <Text style={styles.textPoster}>Người đăng: {itemProps.poster}</Text>
      <Text style={styles.textDateAndTime}>
        Thời gian: {itemProps.date} {'     '}
        {itemProps.time}
      </Text>
    </View>
  );

  return (
    <FlatList
      data={data}
      renderItem={item => (
        <Item
          id={item.item.id}
          title={item.item.title}
          poster={item.item.poster}
          date={item.item.date}
          time={item.item.time}
        />
      )}
      keyExtractor={item => item.id}
      showsVerticalScrollIndicator={false}
      style={{width: '100%', height: '90%'}}
    />
  );
};

export default Item;
