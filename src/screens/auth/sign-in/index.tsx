import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {Button} from '@rneui/themed';
import React from 'react';
import {View} from 'react-native';
import {routes} from '../../../constants';
import {NavigationService} from '../../../navigation';
import auth from '@react-native-firebase/auth';
import useStyles from './styles';
import {useAppDispatch} from '../../../hooks';
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
    <View>
      <Button
        title="Google Sign-In"
        onPress={() => {
          onGoogleButtonPress().then(() => {
            return dispatch(AuthActions.handleLogin());
          });
        }}
      />
    </View>
  );
};

export default SignInScreen;
