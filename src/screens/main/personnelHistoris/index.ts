import {routes} from '../../../constants';
import {Screen} from '../../../types/screen';
import HistoryScreen from './HistoryScreen';
import SupportHistoryScreen from './SupportHistories';
export {default as HistoryScreen} from './HistoryScreen';

export const historyScreens: Screen[] = [
  {
    name: routes.PERSONNELHISTORIES,
    component: HistoryScreen,
  },
  {
    name: routes.SUPPORTHISTORIES,
    component: SupportHistoryScreen,
  }
];
