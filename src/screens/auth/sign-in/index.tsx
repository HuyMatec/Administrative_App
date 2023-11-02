import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import React from 'react';
import {Alert, TouchableOpacity, View} from 'react-native';
import {SelectList} from 'react-native-dropdown-select-list';
import {FPT_Logo_Image, Google_Logo_Image} from '../../../assets/svg';
import {useAppDispatch} from '../../../hooks';
import useStyles from './styles';
import {data} from './types';
import {Text} from 'react-native';
import Item from './components/RenderItem/Item';
import {Button} from 'react-native';
import {AuthActions} from '../../../redux';

const SignInScreen: React.FC = () => {
  const dispatch = useAppDispatch();

  async function onGoogleButtonPress() {
    // Check if your device supports Google Play
    await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
    // Get the users ID token
    const {idToken} = await GoogleSignin.signIn();
    console.log('idToken: ' + idToken);

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
  }

  const styles = useStyles();

  return (
    <View style={styles.container}>
      <View style={styles.view1} />
      <View style={styles.viewBackground}>
        <View style={styles.viewBackroundMain}>
          <View>
            <FPT_Logo_Image />
          </View>
          <View style={styles.viewBackgroundItem}>
            <Item />
          </View>
          <TouchableOpacity
            style={styles.viewBtnGoogle}
            onPress={() => {
              onGoogleButtonPress().then(() => {
                return dispatch(AuthActions.handleLogin());
              });
            }}>
            <View style={{flexDirection: 'row'}}>
              <Google_Logo_Image />
              <Text style={styles.textGoogle}>Google</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{flex: 2}} />
    </View>
  );
};

export default SignInScreen;
