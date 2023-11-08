import {routes} from '../../../constants';
import {Screen} from '../../../types/screen';
import HistoryScreen from './HistoryScreen';
export {default as HistoryScreen} from './HistoryScreen';

export const historyScreens: Screen[] = [
  {
    name: routes.HISTORIES,
    component: HistoryScreen,
  },

];
