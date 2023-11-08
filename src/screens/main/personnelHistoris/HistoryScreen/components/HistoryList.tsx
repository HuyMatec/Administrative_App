import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
  ListRenderItemInfo,
} from 'react-native';
import React from 'react';
import {DataProps} from '../types';
import { fontFamilySetup } from '../../../../utils/font';

const Data: DataProps[] = [
  {
    id: 1,
    title: 'Sự cố về cơ sở vật chất',
    name: 'Người tiếp nhận: Nguyễn Trung Hải',
    date: '8-2-2023',
    time: '09:05 am',
    room: 'Phòng: T1101',
    image:
      'https://static-images.vnncdn.net/files/publish/2022/9/3/bien-vo-cuc-thai-binh-346.jpeg',
  },
  {
    id: 2,
    title: 'Sự cố về cơ sở vật chất',
    name: 'Người tiếp nhận: Nguyễn Trung Hải',
    date: '8-2-2023',
    time: '09:05 am',
    room: 'Phòng: T1101',
    image:
      'https://stcv4.hnammobile.com/downloads/f/cach-chup-anh-chan-dung-bang-dien-thoai-lung-linh-nhu-may-anh-01676344756.jpg',
  },
  {
    id: 3,
    title: 'Sự cố về cơ sở vật chất',
    name: 'Người tiếp nhận: Nguyễn Trung Hải',
    date: '8-2-2023',
    time: '09:05 am',
    room: 'Phòng: T1101',
    image:
      'https://img.nhandan.com.vn/Files/Images/2020/07/26/nhat_cay-1595747664059.jpg',
  },
  {
    id: 4,
    title: 'Sự cố về cơ sở vật chất',
    name: 'Người tiếp nhận: Nguyễn Trung Hải',
    date: '8-2-2023',
    time: '09:05 am',
    room: 'Phòng: T1101',
    image:
      'https://img.nhandan.com.vn/Files/Images/2020/07/26/nhat_cay-1595747664059.jpg',
  },
  {
    id: 5,
    title: 'Sự cố về cơ sở vật chất',
    name: 'Người tiếp nhận: Nguyễn Trung Hải',
    date: '8-2-2023',
    time: '09:05 am',
    room: 'Phòng: T1101',
    image:
      'https://img.nhandan.com.vn/Files/Images/2020/07/26/nhat_cay-1595747664059.jpg',
  },
];
const HistoryList = () => {
  const renderItem = ({index, item}: ListRenderItemInfo<DataProps>) => {
    return (
      <TouchableOpacity>
        <View style={styles.container} key={index}>
          <View style={styles.item}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.receiver}>{item.name}</Text>
            <View style={styles.timeContainer}>
              <Text style={styles.time}>{item.date}</Text>
              <Text style={styles.time}>{item.time}</Text>
              <Text style={styles.time}>{item.room}</Text>
            </View>
          </View>
          <Image source={{uri: item.image}} style={styles.image} />
        </View>
      </TouchableOpacity>
    );
  };
  return (
      <FlatList
        data={Data}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        horizontal={false}
        style={{width: '100%'}}
      />
  );
};

export default HistoryList;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F1F4F5',
    marginBottom: 10,
    borderRadius: 8,
    width: '100%',
    borderBottomColor: '#CCC9C9',
    borderBottomWidth: 1,
  },
  item: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginLeft: 17,
    marginTop: 17,
  },
  title: {
    fontSize: 14,
    lineHeight: 21,
    color: '#000',
    marginBottom: 13,
    fontWeight: '700',
    fontFamily:fontFamilySetup.Poppins_SemiBold
  },
  receiver: {
    fontSize: 12,
    lineHeight: 18,
    fontWeight: '400',
    color: '#000',
    fontFamily:fontFamilySetup.Poppins_Regular
  },
  timeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 13,
  },
  time: {
    fontSize: 12,
    lineHeight: 18,
    fontWeight: '400',
    color: '#000',
    marginRight: 20,
    fontFamily:fontFamilySetup.Poppins_Regular
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginRight: 22,
  },
});