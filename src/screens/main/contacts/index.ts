import {routes} from '../../../constants';
import {Screen} from '../../../types/screen';
import ContactsScreen from './Contacts';

export {default as Contacts} from './Contacts';

export const contactsScreens: Screen[] = [
  {
    name: routes.CONTACTS,
    component: ContactsScreen,
  },
];
