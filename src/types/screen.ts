import {routes} from '../constants';
import {FunctionComponent} from 'react';

export type Screen = {
  name: routes;
  component: FunctionComponent<any>;
};
