
import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import useStyles from './styles';
import {NavigationService} from '../../../../navigation';
import {routes} from '../../../../constants';
import {Icon} from '@rneui/themed';
import Item from './components/RenderItem/Item';

const HistoriesScreen = () => {
  const styles = useStyles();

  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <View style={styles.view1}>
          <Image
            source={{
              uri: 'https://cdn3d.iconscout.com/3d/premium/thumb/colombian-people-9437719-7665524.png?f=webp',
            }}
            style={styles.viewImage}
          />
          <Text style={styles.textFullName}>Nguyễn Văn A</Text>
          <TouchableOpacity
            onPress={() => {
              NavigationService.navigate(routes.NOTIFICATIONS);
            }}>
            <Icon
              name="notifications-outline"
              type="ionicon"
              color={'white'}
              size={24}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.view2}>
          <Text style={styles.textLS}>Lịch sử</Text>
          <View>
            <Item />
          </View>
        </View>
      </View>
    </View>
  )
}

export default HistoriesScreen