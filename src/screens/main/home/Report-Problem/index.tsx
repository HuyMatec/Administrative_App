import {Icon} from '@rneui/themed';
import React, {useState} from 'react';
import {
  Image,
  PermissionsAndroid,
  ScrollView,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import * as ImagePicker from 'react-native-image-picker';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import HeaderCustomV1 from '../../../../components/HeaderCustomV1';
import InputCustomV1 from '../../../../components/InputCustomV1';
import {NavigationService} from '../../../../navigation';
import Item from './components/RenderItem/Item';
import useStyles from './styles';

const ReportProblemScreen = () => {
  const styles = useStyles();

  const [selectImageCamera, setSelectImageCamera] = useState('');
  const [selectImageGallery, setSelectImageGallery] = useState('');

  const optionCamera: ImagePicker.CameraOptions = {
    mediaType: 'mixed',
    cameraType: 'front',
    quality: 1,
    saveToPhotos: true,
    includeBase64: false,
    maxWidth: 500,
    maxHeight: 500,
  };

  const optionLibrary: ImagePicker.ImageLibraryOptions = {
    mediaType: 'mixed',
    quality: 1,
    selectionLimit: 1,
    includeBase64: false,
    maxWidth: 500,
    maxHeight: 500,
  };

  const handleCamera = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'App Camera Permission',
          message: 'App needs access to your camera ',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );

      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: 'App Camera Permission',
            message: 'App needs access to your camera ',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          },
        );
        const result = await launchCamera(optionCamera);
        if (result?.assets && result.assets[0].uri) {
          const formdata = new FormData();
          formdata.append('avatar', {
            uri: result.assets[0].uri,
            name: result.assets[0].fileName,
            type: result.assets[0].type,
          });
          setSelectImageCamera(result.assets[0].uri);
          ToastAndroid.show('Image taken successfully', ToastAndroid.TOP);
        } else {
          ToastAndroid.show('User cancelled launchCamera!', ToastAndroid.TOP);
        }
      } else {
        ToastAndroid.show('Camera permission denied!', ToastAndroid.TOP);
      }
    } catch (error) {
      console.warn(error);
    }
  };

  const handleGallery = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        {
          title: 'Storage Permission',
          message: 'Your app needs access to your gallery',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted) {
        const result = await launchImageLibrary(optionLibrary);
        if (result.didCancel) {
          ToastAndroid.show(
            'User cancelled launchImageLibrary',
            ToastAndroid.TOP,
          );
        } else {
          if (result?.assets && result.assets[0].uri) {
            const formdata = new FormData();
            formdata.append('avatar', {
              uri: result.assets[0].uri,
              name: result.assets[0].fileName,
              type: result.assets[0].type,
            });

            setSelectImageGallery(result.assets[0].uri);
            ToastAndroid.show('Image taken successfully', ToastAndroid.TOP);
          } else {
            ToastAndroid.show(
              'Image URI is missing in the response!',
              ToastAndroid.TOP,
            );
          }
        }
      }
    } catch (error) {
      console.warn(error);
    }
  };

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
          title="Báo cáo sự cố"
        />
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{overflow: 'scroll'}}>
          <View style={styles.viewMTB}>
            <InputCustomV1 placeholder="Phòng" />
          </View>
          <View style={styles.viewMB}>
            <Item />
          </View>
          <View style={styles.viewMB}>
            <InputCustomV1
              placeholder="Mô tả sự cố"
              style={styles.viewInput}
              multiline
            />
          </View>
          <View style={styles.viewCenter}>
            <View style={styles.viewBocBtn}>
              <TouchableOpacity
                style={[
                  styles.viewBtn,
                  {
                    marginEnd: 12,
                  },
                ]}
                onPress={handleCamera}>
                <Icon
                  name="camera-outline"
                  type="ionicon"
                  color={'black'}
                  size={24}
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.viewBtn} onPress={handleGallery}>
                <Icon
                  name="image-outline"
                  type="ionicon"
                  color={'black'}
                  size={24}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.viewCenter}>
            <View style={styles.viewBocImage}>
              {selectImageCamera && (
                <Image
                  source={{uri: selectImageCamera}}
                  style={[{marginEnd: 14}, styles.imageCG]}
                />
              )}
              {selectImageGallery && (
                <Image
                  source={{uri: selectImageGallery}}
                  style={styles.imageCG}
                />
              )}
            </View>
          </View>

          <View style={styles.viewCenter}>
            <TouchableOpacity style={styles.viewBtnGYC}>
              <Text style={styles.textGYC}>Gửi yêu cầu</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default ReportProblemScreen;
