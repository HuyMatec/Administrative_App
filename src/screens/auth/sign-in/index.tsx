import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { FPT, Google } from '../../../assets/svg';
import { useAppDispatch } from '../../../hooks';
import { AuthActions } from '../../../redux';
import Item from './components/RenderItem/Item';
import useStyles from './styles';

const SignInScreen: React.FC = () => {
  const dispatch = useAppDispatch();

  async function onGoogleButtonPress() {
    await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
    const {idToken} = await GoogleSignin.signIn();
    console.log('idToken: ' + idToken);
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    dispatch(AuthActions.handleLoginGoogle());
    return auth().signInWithCredential(googleCredential);
  }

  const styles = useStyles();

  return (
    <View style={styles.container}>
      <View style={styles.view1} />
      <View style={styles.viewBackground}>
        <View style={styles.viewBackroundMain}>
          <View>
            <FPT />
          </View>
          <View style={styles.viewBackgroundItem}>
            <Item />
          </View>
          <TouchableOpacity
            style={styles.viewBtnGoogle}
            onPress={onGoogleButtonPress}>
            <View style={{flexDirection: 'row'}}>
              <Google />
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
