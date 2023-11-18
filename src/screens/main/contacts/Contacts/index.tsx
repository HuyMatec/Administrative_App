import {Icon} from '@rneui/themed';
import React from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import useStyles from './styles';
import {
  dataAdministrativeOffices,
  dataProps,
  dataTechnicalDepartment,
} from './types';
import {HeaderCustomV1} from '../../../../components';
import {NavigationService} from '../../../../navigation';
import {routes} from '../../../../constants';

const ContactsScreen = () => {
  const styles = useStyles();

  const Item: React.FC<dataProps> = ({fullname, position, image}) => (
    <TouchableOpacity
      style={[styles.viewRow, styles.itemContact]}
      onPress={() => {
        NavigationService.navigate(routes.ITEM_CONTACT);
      }}>
      <View>
        <Image
          source={{
            uri: image,
          }}
          style={styles.image}
        />
      </View>
      <View>
        <Text style={styles.textFN}>{fullname}</Text>
        <Text style={styles.textP}>{position}</Text>
      </View>
      <View>
        <Icon
          name="chevron-forward-outline"
          type="ionicon"
          color={'black'}
          size={30}
        />
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.viewHeader}>
        <HeaderCustomV1 title="Liên hệ" titleStyle={styles.titleStyleHeader} />
      </View>

      <View style={styles.viewItem1}>
        <View>
          <Text style={styles.textTitleRoom}>Phòng kỹ thuật</Text>

          <FlatList
            data={dataTechnicalDepartment}
            keyExtractor={(item, index) => index.toString()}
            renderItem={renderItem => (
              <Item
                fullname={renderItem.item.fullname}
                position={renderItem.item.position}
                image={renderItem.item.image}
              />
            )}
            style={styles.viewHeight1}
          />
        </View>

        <View style={{marginTop: 26}}>
          <View>
            <Text style={styles.textTitleRoom}>Phòng hành chính</Text>

            <FlatList
              data={dataAdministrativeOffices}
              keyExtractor={(item, index) => index.toString()}
              renderItem={renderItem => (
                <Item
                  fullname={renderItem.item.fullname}
                  position={renderItem.item.position}
                  image={renderItem.item.image}
                />
              )}
              showsVerticalScrollIndicator={false}
              style={styles.viewHeight2}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default ContactsScreen;
