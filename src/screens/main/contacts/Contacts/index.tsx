
import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {NavigationService} from '../../../../navigation';
import {routes} from '../../../../constants';
import {Icon} from '@rneui/themed';
import useStyles from './styles';

const ContactsScreen = () => {
  const styles = useStyles();

  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <View style={styles.view1}>
          <View style={styles.viewCenter}>
            <Image
              source={{
                uri: 'https://cdn3d.iconscout.com/3d/premium/thumb/colombian-people-9437719-7665524.png?f=webp',
              }}
              style={styles.viewImage}
            />
            <Text style={styles.textFullName}>Nguyễn Văn A</Text>
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
  )
}

export default ContactsScreen