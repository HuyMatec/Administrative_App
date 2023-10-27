import {routes} from '../../../constants';
import {Screen} from '../../../types/screen';
import SettingsScreen from './Settings';

export {default as Settings} from './Settings';

export const settingsScreens: Screen[] = [
  {
    name: routes.SETTINGS,
    component: SettingsScreen,
  },
];
