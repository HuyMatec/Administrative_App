import {routes} from '../../../constants';
import {Screen} from '../../../types/screen';
import HistoriesScreen from '../../personnel/HistoryScreen';

export {default as Histories} from '../../personnel/HistoryScreen';

export const historiesScreens: Screen[] = [
  {
    name: routes.HISTORIES,
    component: HistoriesScreen,
  },
];
