import changeTab from './utils/tabChange';
import { buildTabBooking } from './tabs';

import bookingHandlers from './booking/config/handlers';
import patientHandlers from './patient/config/handlers';

const appHandlers = {
  click: [{ selector: '.cancelButton', callback: buildTabBooking }],
  navClick: [{ selector: '.nav-link', callback: changeTab }]
};

const handlers = [appHandlers, bookingHandlers, patientHandlers];

function handle(type, e) {
  for (const handler of handlers) {
    if (handler[type]) {
      for (const event of handler[type]) {
        if (e.target.matches(event.selector)) {
          event.callback(e);
          break;
        }
      }
    }
  }
}

function clickEventHandler(e) {
  const type = 'click';
  handle(type, e);
}

function inputEventHandler(e) {
  const type = 'input';
  handle(type, e);
}

function navClickEventHandler(e) {
  const type = 'navClick';
  handle(type, e);
}

export { clickEventHandler, inputEventHandler, navClickEventHandler };
