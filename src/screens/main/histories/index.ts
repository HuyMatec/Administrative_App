import {routes} from '../../../constants';
import {Screen} from '../../../types/screen';
import HistoriesScreen from '../histories/Histories';

export {default as Histories} from '../histories/Histories';

export const historiesScreens: Screen[] = [
  {
    name: routes.HISTORIES,
    component: HistoriesScreen,
  },
];
