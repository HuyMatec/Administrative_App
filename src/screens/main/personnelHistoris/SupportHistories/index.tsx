import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {HeaderCustomV1} from '../../../../components';
import {NavigationService} from '../../../../navigation';
import useStyles from './styles';
import Item from './components/Item';
import {useRoute} from '@react-navigation/native';
import {ItemProps} from '../HistoryScreen/types';

const SupportHistoryScreen = () => {
  const styles = useStyles();
  const params = useRoute().params as {item: ItemProps};
  const item = params.item;
  console.log(item);

  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <HeaderCustomV1
          leftIcon={{
            name: 'chevron-back-outline',
            type: 'ionicon',
            color: '#000000',
          }}
          onPressLeftIcon={() => {
            NavigationService.goBack();
          }}
          title={item?.title}
        />
        <View style={styles.view}>
        <Text style={styles.textPhone}>Tên người yêu cầu: </Text>
        <View style={styles.itemContainer}>
          <View style={styles.itemLeft}>
            <Image source={{uri: item.imageURL}} style={styles.viewImage} />
            <View style={styles.item}>
              <Text style={styles.textReciever1}>{item.reciever}</Text>
              <Text style={styles.textPhone}>{item.phone}</Text>
            </View>
          </View>
          <Image
            source={require('../../../../assets/images/alo.png')}
            style={styles.buttomIcon}
          />
        </View>
        <View style={styles.itemLeft}>
          <Text style={styles.textPhone}>Thời gian: </Text>
          <Text style={styles.texttitle}>{item.time}</Text>
        </View>
        <View style={styles.itemLeft}>
          <Text style={styles.textPhone}>Phòng: </Text>
          <Text style={styles.texttitle}>{item.room}</Text>
        </View>
        <Text style={[{margin:5}, styles.textPhone]}>Mô tẩ sự cố: </Text>
        
        </View>
        <View style={styles.viewItem1}>
          <Text style={styles.text1}>{item.description}</Text>
        </View>
        <View style={styles.view}>
          <Text style={styles.textState}>Trạng thái đã xử lý</Text>
          <Item />
        </View>
      </View>
    </View>
  );
};

export default SupportHistoryScreen;
