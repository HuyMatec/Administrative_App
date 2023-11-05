import React from 'react';
import {View, Text, Image, StatusBar} from 'react-native';
import {styles} from './styles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import { useRoute } from "@react-navigation/native";
import { DataProps } from "../types";
import { NavigationService } from "../../../../navigation";

const DetailContact = () => {
  const params =  useRoute().params as {item: DataProps};
  const item = params.item
  const onBack = ()=>{
    NavigationService.goBack();
  }
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#2D5381" />
      <View style={styles.header}>
        <TouchableOpacity onPress={onBack}>
          <Image
            source={require('../../../../../assets/images/chevron-left.png')}
            style={styles.backButton}
          />

        </TouchableOpacity><Text style={styles.backname}>Trở về</Text>
      </View>
      <View style={styles.userInfo}>
        <Image
          source={{uri: item?.image}}
          style={styles.avatar}
        />
        <Text style={styles.fullName}>{item?.name}</Text>
        <Text style={styles.position}>{item?.position}</Text>
      </View>
      <View style={styles.bottomSheet}>
        <View style={styles.bottomSheetItem}>
          <View style={styles.leftItem}>
            <Text style={styles.textItem}>Số điện thoại</Text>
            <Text style={styles.phoneNumber}>{item.phoneNumber}</Text>
          </View>

          <TouchableOpacity>
            <Image
              source={require('../../../../../assets/images/alo.png')}
              style={styles.buttomIcon}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default DetailContact;
