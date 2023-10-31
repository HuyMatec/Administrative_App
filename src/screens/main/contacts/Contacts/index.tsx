import {View, Text, Image, ListRenderItemInfo, StatusBar} from 'react-native';
import React from 'react';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';
import {Data, DataProps} from './types';
import {styles} from './styles';

const ContactsScreen = () => {
  const renderItem = ({index, item}: ListRenderItemInfo<DataProps>) => {
    return (
      <TouchableOpacity>
        <View style={styles.itemContainer} key={index}>
          <View style={styles.itemLeft}>
          <Image source={{uri: item.image}} style={styles.image} />
          <View style={styles.item}>
            <Text style={styles.itemtitle}>{item.name}</Text>
            <Text style={styles.itemPosition}>{item.position}</Text>
          </View>
          </View>
          <Image
            style={styles.chevronRight}
            source={require('../../../../assets/images/chevron-right2.png')}
          />
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#2D5381" />
      <Text style={styles.title}>Liên hệ</Text>
      <Text style={styles.content}>Phòng kỹ thuật</Text>
      <FlatList
        data={Data}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        horizontal={false}
        style={{width: '100%'}}
      />
      <Text style={styles.content}>Phòng hành chính</Text>
      <FlatList
        data={Data}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        horizontal={false}
        style={{width: '100%'}}
      />
    </View>
  );
};

export default ContactsScreen;
