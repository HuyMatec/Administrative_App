import {routes} from '../../../constants';
import {Screen} from '../../../types/screen';
import HomeScreen from './Home';
import NotificationsScreen from './Notifications';
import ReportProblemScreen from './Report-Problem';
import RequestIncidentSupportScreen from './Request-Incident-Support';
import RequestTechSupportScreen from './Request-Tech-Support';
import SupportTechScreen from './Support-Tech';

export {default as Home} from './Home';

export const homeScreens: Screen[] = [
  {
    name: routes.HOME,
    component: HomeScreen,
  },
  {
    name: routes.NOTIFICATIONS,
    component: NotificationsScreen,
  },
  {
    name: routes.REPORT_PROBLEM,
    component: ReportProblemScreen,
  },
  {
    name: routes.REQUEST_INCIDENT_SUPPORT,
    component: RequestIncidentSupportScreen,
  },
  {
    name: routes.SUPPORT_TECH,
    component: SupportTechScreen,
  },
  {
    name: routes.REQUEST_TECH_SUPPORT,
    component: RequestTechSupportScreen,
  },
];
