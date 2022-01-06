import changeTab from './utils/changeTab';
import { buildTabBooking } from './tabs';

import bookingHandlers from '../booking/config/handlers';
import patientHandlers from '../patient/config/handlers';

const appHandlers = {
  click: [
    { selector: '#cancelButton', callback: buildTabBooking }
  ],
  navClick: [{ selector: '.nav-link', callback: changeTab }],
};

const handlers = [appHandlers, bookingHandlers, patientHandlers];

function clickEventHandler(e) {
  for (const handler of handlers) {
    if (handler.click) {
      for (const event of handler.click) {
        if (e.target.matches(event.selector)) {
          event.callback(e);
          break;
        }
      }
    }
  }
}

function inputEventHandler(e) {
  for (const handler of handlers) {
    if (handler.input) {
      for (const event of handler.input) {
        if (e.target.matches(event.selector)) {
          event.callback(e);
          break;
        }
      }
    }
  }
}

function navClickEventHandler(e) {
  for (const handler of handlers) {
    if (handler.navClick) {
      for (const event of handler.navClick) {
        if (e.target.matches(event.selector)) {
          event.callback(e);
          break;
        }
      }
    }
  }
}

export { clickEventHandler, inputEventHandler, navClickEventHandler };
