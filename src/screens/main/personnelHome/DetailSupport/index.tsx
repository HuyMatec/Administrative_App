import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import useStyles from './styles';
import {HeaderCustomV1, InputCustomV1} from '../../../../components';
import {NavigationService} from '../../../../navigation';
import {useRoute} from '@react-navigation/native';
import {supportProps} from '../SupportScreen/types';
import ItemProblem from './components/ItemProblem';
import ItemTime from './components/ItemTime';

const DetailSupportScreen = () => {
  const styles = useStyles();
  const params = useRoute().params as {item: supportProps};
  const item = params.item;

  const isUnreceived = item?.type === 'unreceive';
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
          <View style={styles.itemLeft}>
            <Image source={{uri: item?.imageURL}} style={styles.viewImage} />
            <View>
              <Text style={styles.textSender}>{item?.sender}</Text>
              <Text style={styles.textPhone}>{item?.phone}</Text>
            </View>
            <Image
              source={require('../../../../assets/images/alo.png')}
              style={styles.buttomIcon}
            />
          </View>
          <View style={styles.itemLeft}>
            <Text style={styles.textPhone}>Thời gian: </Text>
            <Text style={styles.texttitle}>{item?.time}</Text>
          </View>
          <View style={styles.itemLeft}>
            <Text style={styles.textPhone}>Phòng: </Text>
            <Text style={styles.texttitle}>{item?.room}</Text>
          </View>
          <View style={styles.viewRow}>
            <Text style={styles.textPhone}>Mô tẩ sự cố: </Text>
            <Text style={styles.texttitle}>{item?.description}</Text>
          </View>
        </View>
        {isUnreceived ? (
          <View style={styles.viewCenter}>
            <TouchableOpacity style={styles.viewBtnGYC}>
              <Text style={styles.textGYC}>Tiếp nhận</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View>
            <View style={styles.viewMB}>
              <View style={styles.itemSelect}>
                <ItemProblem />
                <ItemTime />
              </View>
              <InputCustomV1
                placeholder="Ghi chú"
                style={styles.viewInput}
                multiline
              />
            </View>
            <View style={styles.viewBT}>
              <TouchableOpacity
                style={[styles.viewBtn, {backgroundColor: '#29D13A'}]}>
                <Text style={styles.textGYC}>Hoàn thành</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.viewBtn, {backgroundColor: '#FF2D2D'}]}>
                <Text style={styles.textGYC}>Chưa xử lý được</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </View>
    </View>
  );
};

export default DetailSupportScreen;
