import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import HeaderCustomV1 from '../../../../components/HeaderCustomV1';
import {NavigationService} from '../../../../navigation';
import useStyles from './styles';
import InputCustomV1 from '../../../../components/InputCustomV1';
import Item from './components/RenderItem/Item';
import {Icon} from '@rneui/themed';

const ReportProblemScreen = () => {
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
          title="Báo cáo sự cố"
        />
        <View style={styles.viewMTB}>
          <InputCustomV1 placeholder="Phòng" />
        </View>
        <View style={styles.viewMB}>
          <Item />
        </View>
        <View style={styles.viewMB}>
          <InputCustomV1
            placeholder="Mô tả sự cố"
            style={styles.viewInput}
            multiline
          />
        </View>
        <View style={styles.viewCenter}>
          <View style={styles.viewBocBtn}>
            <View
              style={[
                styles.viewBtn,
                {
                  marginEnd: 12,
                },
              ]}>
              <Icon
                name="camera-outline"
                type="ionicon"
                color={'black'}
                size={24}
              />
            </View>
            <View style={styles.viewBtn}>
              <Icon
                name="image-outline"
                type="ionicon"
                color={'black'}
                size={24}
              />
            </View>
          </View>
        </View>
        <TouchableOpacity style={styles.viewBtnGYC}>
          <Text style={styles.textGYC}>Gửi yêu cầu</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ReportProblemScreen;
