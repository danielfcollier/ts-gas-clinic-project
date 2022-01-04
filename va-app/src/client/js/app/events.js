import { clickEventHandler, inputEventHandler, navClickEventHandler } from './handlers';
import {
  buildTabBooking,
  buildTabCreatePatient,
  buildTabSearchPatient,
  buildTabWeeks,
} from './tabs';

const events = [
  {
    id: 'tab-booking',
    type: 'click',
    callback: buildTabBooking,
  },
  {
    id: 'tab-search-patient',
    type: 'click',
    callback: buildTabSearchPatient,
  },
  {
    id: 'tab-create-patient',
    type: 'click',
    callback: buildTabCreatePatient,
  },
  {
    id: 'tab-weeks',
    type: 'click',
    callback: buildTabWeeks,
  },
  {
    id: 'app',
    type: 'click',
    callback: clickEventHandler,
  },
  {
    id: 'app',
    type: 'input',
    callback: inputEventHandler,
  },
  {
    id: 'navigation',
    type: 'click',
    callback: navClickEventHandler,
  },
];

export default events;
