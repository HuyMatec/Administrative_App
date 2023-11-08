import {routes} from '../../../constants';
import {Screen} from '../../../types/screen';
import HomeScreen from './HomeScreen';

export {default as HomeScreen} from './HomeScreen';

export const homeScreen: Screen[] = [
  {
    name: routes.HOME,
    component: HomeScreen,
  },

];
