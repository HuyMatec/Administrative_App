import {View, Text, Image, ListRenderItemInfo, StatusBar, Alert} from 'react-native';
import React from 'react';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';
import {DataProps, contacts} from './types';
import {styles} from './styles';
import { NavigationService } from "../../../navigation";

const ContactsScreen = () => {
  const renderItem = ({index, item}: ListRenderItemInfo<DataProps>) => {
    const onClick = () => {
      // Alert.alert('Thông tin '+item.id, item.name);
      NavigationService.navigate("CONTACTS_DETAIL", {item})
    };
    return (
      <TouchableOpacity onPress={onClick}>
        <View style={styles.itemContainer} key={index}>
          <View style={styles.itemLeft}>
            <Image source={{uri: item.image}} style={styles.image} />
            <View style={styles.item}>
              <Text style={styles.itemtitle}>{item.name}</Text>
              <Text style={styles.itemPosition}>{item.position}</Text>
            </View>
          </View>
          <Image
            style={styles.chevronRight}
            source={require('../../../../assets/images/chevron-right2.png')}
          />
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#2D5381" />
      <Text style={styles.title}>Liên hệ</Text>
      <FlatList
        data={contacts}
        keyExtractor={contactGroup => contactGroup.content}
        renderItem={({item: contactGroup}) => (
          <View key={contactGroup.content}>
            <Text style={styles.content}>{contactGroup.content}</Text>
            <FlatList
              data={contactGroup.contentData}
              keyExtractor={item => item.id.toString()}
              renderItem={renderItem}
              showsVerticalScrollIndicator={false}
              horizontal={false}
              style={{width: '100%'}}
            />
          </View>
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default ContactsScreen;
