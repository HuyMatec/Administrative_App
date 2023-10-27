import {routes} from '../../constants';
import {Screen} from '../../types/screen';
import SignInScreen from './sign-in';

export {default as SignIn} from './sign-in';

export const authScreen: Screen[] = [
  {
    name: routes.SIGN_IN,
    component: SignInScreen,
  },
];
