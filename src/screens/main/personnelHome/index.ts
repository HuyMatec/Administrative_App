import {routes} from '../../../constants';
import {Screen} from '../../../types/screen';
import ClassroomScreen from './ClassroomScreen';
import DetailSupportScreen from './DetailSupport';
import HomeScreen from './HomeScreen';
import SupportScreen from './SupportScreen';

export {default as HomeScreen} from './HomeScreen';

export const homeScreen: Screen[] = [
  {
    name: routes.PERSONNELHOME,
    component: HomeScreen,
  },
  {
    name: routes.CLASSROOMS,
    component: ClassroomScreen,
  },
  {
    name: routes.SUPPORT_PROBLEM,
    component: SupportScreen,
  },
  {
    name: routes.DETAIL_SUPPORT,
    component: DetailSupportScreen,
  }
];
