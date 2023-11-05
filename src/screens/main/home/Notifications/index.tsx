import React from 'react';
import {View} from 'react-native';
import {HeaderCustomV1} from '../../../../components';
import {NavigationService} from '../../../../navigation';
import Item from './components/RenderItem/Item';
import useStyles from './styles';

const NotificationsScreen = () => {
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
          title="Thông báo"
        />
        <Item />
      </View>
    </View>
  );
};

export default NotificationsScreen;
