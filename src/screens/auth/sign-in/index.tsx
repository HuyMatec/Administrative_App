import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {Button} from '@rneui/base';
import React from 'react';
import {View} from 'react-native';
import {routes} from '../../../constants';
import {NavigationService} from '../../../navigation';
import useStyles from './styles';

const SignInScreen: React.FC = () => {
  GoogleSignin.configure({
    webClientId:
      '574486458383-a0928n6m9c74nb503f7vcp3lqj0lldvs.apps.googleusercontent.com',
  });

  async function onGoogleButtonPress() {
    // Check if your device supports Google Play
    await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
    // Get the users ID token
    const {idToken} = await GoogleSignin.signIn();
    console.log('idToken: ' + idToken);

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    NavigationService.push(routes.HOME);

    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
  }

  async function onGoogleSignOutButtonPress() {
    console.log('GoogleSignin.signOut: ', GoogleSignin.signOut);
    return GoogleSignin.signOut;
  }

  const styles = useStyles();

  return (
    <View>
      <Button
        title="Google Sign-In"
        onPress={() =>
          onGoogleButtonPress().then(() =>
            console.log('Signed in with Google!'),
          )
        }
      />
      <Button
        title="Google Sign-Out"
        onPress={() =>
          onGoogleSignOutButtonPress().then(() =>
            console.log('Sign out with Google!'),
          )
        }
      />
    </View>
  );
};

export default SignInScreen;
