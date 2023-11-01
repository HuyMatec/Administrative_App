import {routes} from '../../../constants';
import {Screen} from '../../../types/screen';
import ContactsScreen from './Contacts';
import DetailContact from './Contacts/DetailContact';

export {default as Contacts} from './Contacts';

export const contactsScreens: Screen[] = [
  {
    name: routes.CONTACTS,
    component: ContactsScreen,
  },
  {
    name: routes.CONTACTS_DETAIL,
    component: DetailContact,
  },
  
];
