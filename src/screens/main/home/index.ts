import {routes} from '../../../constants';
import {Screen} from '../../../types/screen';
import HomeScreen from './Home';
import ReportProblemScreen from './Report-Problem';

export {default as Home} from './Home';

export const homeScreens: Screen[] = [
  {
    name: routes.HOME,
    component: HomeScreen,
  },
  {
    name: routes.REPORT_PROBLEM,
    component: ReportProblemScreen,
  },
];
