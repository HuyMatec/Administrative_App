import {routes} from '../../../constants';
import {Screen} from '../../../types/screen';
import ContactsScreen from '../../personnel/ContactScreen';
import DetailContact from '../../personnel/ContactScreen/DetailContact';

export {default as Contacts} from '../../personnel/ContactScreen';

export const contactsScreens: Screen[] = [
  {
    name: routes.CONTACTS,
    component: ContactsScreen,
  },
];
