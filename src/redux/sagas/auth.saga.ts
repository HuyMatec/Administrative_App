import {PayloadAction} from '@reduxjs/toolkit';
import {GoogleService} from '../../utils/google';
import {AuthActions} from '../reducer';
import {LoginPayload} from '../types/auth.type';
import {AuthService} from '../services';
import {call, put, takeEvery, takeLatest} from 'redux-saga/effects';

function* loginGoogleSaga(
  action: PayloadAction<Omit<LoginPayload, 'email' | 'password'>>,
): Generator {
  try {
    yield GoogleService.logout();
    const checkLogin = yield GoogleService.checkSignIn();
    if (!checkLogin) {
      const {idToken}: any = yield GoogleService.login();

      const {data}: any = yield call(AuthService.handleGGLogin, {
        device_token: action.payload.device_token,
        idToken,
      });

      yield put(
        AuthActions.handleLoginSuccess({
          accessToken: data,
          refreshToken: data,
          enableSignIn: true,
        }),
      );
    }
  } catch (error: any) {
    console.log('Have error at login google saga: ' + error.message);
  }
}

export default function* watchAuthSaga() {
  yield takeLatest(AuthActions.handleLoginGoogle.type, loginGoogleSaga);
}
