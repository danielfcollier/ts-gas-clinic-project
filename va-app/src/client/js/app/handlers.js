import {
  buildTabBooking,
  buildTabCreateBooking,
  buildTabUpdateBooking,
  buildTabUpdatePatient,
} from './tabs';

import changeTab from './utils/changeTab';

import patientHandlers from '../patient/handlers';

const appHandlers = {
  click: [
    { selector: '.createBookingButton', callback: buildTabCreateBooking },
    { selector: '.updateBookingButton', callback: buildTabUpdateBooking },
    { selector: '.updatePatientButton', callback: buildTabUpdatePatient },
    { selector: '#cancel-changes', callback: buildTabBooking },
  ],
  navClick: [{ selector: '.nav-link', callback: changeTab }],
};

const handlers = [appHandlers, patientHandlers];

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
