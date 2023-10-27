import {routes} from '../../../constants';
import {Screen} from '../../../types/screen';
import HistoriesScreen from './Histories';

export {default as Histories} from './Histories';

export const historiesScreens: Screen[] = [
  {
    name: routes.HISTORIES,
    component: HistoriesScreen,
  },
];
