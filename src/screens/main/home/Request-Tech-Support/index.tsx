import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {HeaderCustomV1} from '../../../../components';
import {NavigationService} from '../../../../navigation';
import useStyles from './styles';
import Item from './RenderItem/Item';

const RequestTechSupportScreen = () => {
  const styles = useStyles();

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
          title="Yêu cầu hỗ trợ CNTT"
        />
        <View style={styles.viewItem}>
          <View style={[styles.viewRow, styles.viewCenter]}>
            <View style={styles.viewTextLeft}>
              <Text style={styles.textTitle}>Sự cố về cơ sở vật chất</Text>
              <Text style={styles.textReciever}>
                Người tiếp nhận: Nguyễn Trung Hải
              </Text>
              <View style={[styles.viewRow, {justifyContent: 'space-between'}]}>
                <View>
                  <Text style={styles.text}>8-2-2023</Text>
                </View>
                <View>
                  <Text style={styles.text}>09:05 am</Text>
                </View>
                <View>
                  <Text style={styles.text}>SĐT: 0797151033</Text>
                </View>
              </View>
            </View>
            <View style={{flex: 0.8}}>
              <Image
                source={{
                  uri: 'https://cdn3d.iconscout.com/3d/premium/thumb/colombian-people-9437719-7665524.png?f=webp',
                }}
                style={styles.viewImage}
              />
            </View>
          </View>
        </View>
        <View>
          <Text style={styles.textState}>Trạng thái yêu cầu</Text>
          <Item />
        </View>
        <View style={styles.viewCenter}>
          <TouchableOpacity style={styles.viewBtnPH}>
            <Text style={styles.textPH}>Phản hồi</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default RequestTechSupportScreen;
