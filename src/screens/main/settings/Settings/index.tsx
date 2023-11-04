import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {Button} from '@rneui/base';
import React from 'react';
import {View} from 'react-native';
import {useAppDispatch} from '../../../../hooks';
import {AuthActions} from '../../../../redux';

const SettingsScreen = () => {
  const dispatch = useAppDispatch();

  async function onGoogleSignOutButtonPress() {
    dispatch(AuthActions.handleLogoutGoogle());
    return GoogleSignin.signOut();
  }

  return (
    <View>
      <Button title="Google Sign-Out" onPress={onGoogleSignOutButtonPress} />
    </View>
  );
};

export default SettingsScreen;
