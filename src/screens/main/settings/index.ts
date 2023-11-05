import {routes} from '../../../constants';
import {Screen} from '../../../types/screen';
import SettingsScreen from '../../SettingScreen';

export {default as Settings} from '../../SettingScreen';

export const settingsScreens: Screen[] = [
  {
    name: routes.SETTINGS,
    component: SettingsScreen,
  },
];
