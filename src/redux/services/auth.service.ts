import {ENDPOINTS} from '../../environment';
import {LoginPayload} from '../types/auth.type';
import apiService from './api.service';

export class AuthService {
  static async handleGGLogin(
    payload: Omit<LoginPayload, 'email' | 'password'>,
  ) {
    return await apiService.post(ENDPOINTS.LOGIN_GOOGLE, payload);
  }
}
