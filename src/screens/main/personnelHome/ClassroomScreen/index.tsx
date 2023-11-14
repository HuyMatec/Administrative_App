import {View, Text, StatusBar} from 'react-native';
import React from 'react';
import useStyles from './styles';
import {Icon} from '@rneui/themed';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {NavigationService} from '../../../../navigation';
import {routes} from '../../../../constants';

const ClassroomScreen = () => {
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
          <Text style={styles.textTitle}>Kiểm tra tính sãn sàng</Text>
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
        <View style={styles.view2}>
          <TouchableOpacity
            onPress={() => {
              NavigationService.navigate(routes.BUILDINGSCREEN);
            }}>
            <View style={[styles.view3, {backgroundColor: '#0D51A1'}]}>
              <View style={styles.viewText1}>
                <View style={styles.viewText2}>
                  <Text style={styles.textT}>Tòa F</Text>
                  <Text style={styles.textSL}>3 Tầng</Text>
                </View>
                <Text style={styles.text} numberOfLines={2}>
                  Tòa dành cho sinh viên học chuyên ngành Thiết kế đồ họa và
                  Thiết kế website
                </Text>
              </View>
              <Icon
                name="chevron-forward"
                color={'white'}
                type="ionicon"
                size={25}
                style={{marginRight: 16}}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              NavigationService.navigate(routes.BUILDINGSCREEN);
            }}>
            <View style={[styles.view3, {backgroundColor: '#F27125'}]}>
              <View style={styles.viewText1}>
                <View style={styles.viewText2}>
                  <Text style={styles.textT}>Tòa P</Text>
                  <Text style={styles.textSL}>5 Tầng</Text>
                </View>
                <Text style={styles.text} numberOfLines={2}>
                  Tòa dành cho sinh viên học chuyên ngành Marketting và Quản trị
                  kinh doanh
                </Text>
              </View>
              <Icon
                name="chevron-forward"
                color={'white'}
                type="ionicon"
                size={25}
                style={{marginRight: 16}}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              NavigationService.navigate(routes.BUILDINGSCREEN);
            }}>
            <View style={[styles.view3, {backgroundColor: '#4EB849'}]}>
              <View style={styles.viewText1}>
                <View style={styles.viewText2}>
                  <Text style={styles.textT}>Tòa T</Text>
                  <Text style={styles.textSL}>11 Tầng</Text>
                </View>
                <Text style={styles.text} numberOfLines={2}>
                  Tòa dành cho sinh viên học chuyên ngành Công nghệ thông tin,
                  Thiết kế đồ họa và tiếng Anh.
                </Text>
              </View>
              <Icon
                name="chevron-forward"
                color={'white'}
                type="ionicon"
                size={25}
                style={{marginRight: 16}}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ClassroomScreen;
