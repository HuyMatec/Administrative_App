import {View, Text, FlatList, Image} from 'react-native';
import React from 'react';
import useStyles from '../../styles';
import {ItemProps, data} from '../../types';

const Item = () => {
  const styles = useStyles();

  const Item = (item: ItemProps) => (
    <View style={styles.viewItem}>
      <View style={[styles.viewRow, styles.viewCenter]}>
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
              <Text style={styles.text}>{item.room}</Text>
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
  );

  return (
    <FlatList
      data={data}
      renderItem={item => (
        <Item
          id={item.item.id}
          title={item.item.title}
          reciever={item.item.reciever}
          date={item.item.date}
          time={item.item.time}
          room={item.item.room}
          imageURL={item.item.imageURL}
        />
      )}
      keyExtractor={item => item.id}
      showsVerticalScrollIndicator={false}
      style={{width: '100%', height: '90%'}}
    />
  );
};

export default Item;
