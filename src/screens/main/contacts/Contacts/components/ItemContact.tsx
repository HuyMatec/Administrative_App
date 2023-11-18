import {Icon} from '@rneui/themed';
import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import useStyles from '../styles';
import {HeaderCustomV1} from '../../../../../components';
import {NavigationService} from '../../../../../navigation';

const ItemContact = () => {
  const styles = useStyles();

  return (
    <View style={styles.container}>
      <View style={styles.viewHeader}>
        <HeaderCustomV1
          leftIcon={{
            name: 'arrow-back-outline',
            type: 'ionicon',
            color: 'white',
          }}
          onPressLeftIcon={() => {
            NavigationService.goBack();
          }}
        />
      </View>

      <View style={styles.body}>
        <View style={styles.view1}>
          <View style={styles.viewCenter}>
            <Image
              source={{
                uri: 'https://cdn3d.iconscout.com/3d/premium/thumb/colombian-people-9437719-7665524.png?f=webp',
              }}
              style={styles.viewImage}
            />
            <Text style={styles.textFullName}>Nguyễn Trung Hải</Text>
            <Text style={styles.textPosition}>Trưởng phòng IT</Text>
          </View>
        </View>
      </View>

      <View style={styles.view2}>
        <View>
          <View style={[styles.viewRow, styles.viewItem]}>
            <View style={{flex: 3}}>
              <Text style={styles.textPhoneNumber}>Số điện thoại</Text>
              <Text style={styles.textNumber}>0797151033</Text>
            </View>
            <TouchableOpacity>
              <Icon
                name="call-sharp"
                type="ionicon"
                size={24}
                color={'#2245AC'}
                style={styles.iconContact}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ItemContact;
