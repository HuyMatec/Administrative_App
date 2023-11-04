import {routes} from '../../../constants';
import {Screen} from '../../../types/screen';
import HomeScreen from './Home';
import ReportProblemScreen from './Report-Problem';
import RequestSupportScreen from './Request-Support';

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
  {
    name: routes.REQUEST_SUPORT,
    component: RequestSupportScreen,
  },
];
