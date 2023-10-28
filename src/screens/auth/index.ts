import {routes} from '../../constants';
import BottomNavigator from '../../navigation/navigators/BottomNavigator';
import {Screen} from '../../types/screen';
import SignInScreen from './sign-in';

export {default as SignIn} from './sign-in';

export const authScreen: Screen[] = [
  {
    name: routes.SIGN_IN,
    component: SignInScreen,
  },
  {
    name: routes.BOTTOM_TAB,
    component: BottomNavigator,
  },
];
