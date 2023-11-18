import {routes} from '../../../constants';
import {Screen} from '../../../types/screen';
import ContactsScreen from './Contacts';
import ItemContact from './Contacts/components/ItemContact';

export {default as Contacts} from './Contacts';

export const contactsScreens: Screen[] = [
  {
    name: routes.CONTACTS,
    component: ContactsScreen,
  },
  {
    name: routes.ITEM_CONTACT,
    component: ItemContact,
  },
];
