import {routes} from '../../../constants';
import {Screen} from '../../../types/screen';
import HomeScreen from './Home';

export {default as Home} from './Home';

export const homeScreens: Screen[] = [
  {
    name: routes.HOME,
    component: HomeScreen,
  },
];
