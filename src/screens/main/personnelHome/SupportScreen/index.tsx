import {
  View,
  Text,
  StatusBar,
  ListRenderItemInfo,
  Image,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import useStyles from './styles';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';
import {NavigationService} from '../../../../navigation';
import {Icon} from '@rneui/themed';
import {routes} from '../../../../constants';
import {dataSupport, supportProps} from './types';

const SupportScreen = () => {
  const styles = useStyles();
  const [currentTab, setCurrentTab] = useState('unreceive');
  const renderItem = ({item}: ListRenderItemInfo<supportProps>) => (
    <View style={styles.ViewItem}>
      <TouchableOpacity onPress={() => NavigationService.navigate(routes.DETAIL_SUPPORT, {item})}>
        <View style={styles.viewItem1}>
          <View style={styles.viewTextLeft}>
            <View style={styles.viewItem2}>
              <Text style={styles.textTitle}>{item.title}</Text>
              <Text style={styles.textTime}>{item.time}</Text>
            </View>
            <View style={styles.viewItem1}>
              <Image
                source={{
                  uri: item.imageURL,
                }}
                style={styles.viewImageItem}
              />
              <View style={styles.viewLeft}>
                <Text style={styles.textSender}>{item.sender}</Text>
                <View style={styles.viewItem3}>
                  <View>
                    <Text style={styles.text}>{item.building}</Text>
                  </View>
                  <View>
                    <Text style={styles.text}>Phòng:{item.room}</Text>
                  </View>
                  <View>
                    <Text style={styles.text}>{item.time}</Text>
                  </View>
                  <View>
                    <Text style={styles.text}>{item.date}</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );

  const filteredData = dataSupport.filter(item => item.type === currentTab);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={'#2D5381'} />
      <View style={styles.view1}>
        <TouchableOpacity
          onPress={() => {
            NavigationService.goBack();
          }}>
          <Icon
            name="chevron-back-outline"
            type="ionicon"
            color={'white'}
            size={24}
          />
        </TouchableOpacity>
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
        <View style={styles.view3}>
          <TouchableOpacity
            style={currentTab === 'unreceive' ? styles.view4 : styles.view5}
            onPress={() => setCurrentTab('unreceive')}>
            <Text style={currentTab === 'unreceive' ? styles.text1 : styles.text2}>Sự cố hiện có</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={currentTab === 'unreceive' ? styles.view5 : styles.view4}
            onPress={() => setCurrentTab('receive')}>
            <Text style={currentTab === 'receive' ? styles.text1 : styles.text2}>Đang tiếp nhận</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={filteredData}
          keyExtractor={item => item.id}
          renderItem={renderItem}
        />
      </View>
    </View>
  );
};

export default SupportScreen;
