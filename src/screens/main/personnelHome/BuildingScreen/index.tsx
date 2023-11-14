import {View, Text, StatusBar} from 'react-native';
import React from 'react';
import useStyles from './styles';
import {Icon} from '@rneui/themed';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {NavigationService} from '../../../../navigation';
import {routes} from '../../../../constants';
import ItemBuilding from './components/ItemBuilding';

const BuildingScreen = () => {
  const styles = useStyles();
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <View style={styles.view1}>
          <TouchableOpacity
            onPress={() => {
              NavigationService.goBack();
            }}>
            <Icon
              name="chevron-back-outline"
              type="ionicon"
              color={'black'}
              size={24}
            />
          </TouchableOpacity>
          <Text style={styles.textTitle}>Tòa F</Text>
          <TouchableOpacity
            onPress={() => {
              NavigationService.navigate(routes.NOTIFICATIONS);
            }}>
            <Icon
              name="notifications-outline"
              type="ionicon"
              color={'black'}
              size={24}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.viewBody}>
         <ItemBuilding/> 
        </View>
      </View>
    </View>
  );
};

export default BuildingScreen;
