import {routes} from '../../../constants';
import {Screen} from '../../../types/screen';
import SettingScreen from './SettingScreen';
export {default as SettingScreen} from './SettingScreen';

export const settingScreens: Screen[] = [
  {
    name: routes.PERSONNELSETTINGS,
    component: SettingScreen,
  },

];
