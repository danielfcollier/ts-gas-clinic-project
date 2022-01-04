import { loadEditCustomerTab, loadSearchTab } from './tabs';

import changeTab from './utils/changeTab';

import customerHandlers from '../customer/handlers';
import { addCustomer } from '../customer/actionsAdd';

const appHandlers = {
  click: [
    { selector: '#addButton', callback: addCustomer },
    { selector: '.editButton', callback: loadEditCustomerTab },
    { selector: '#cancel-changes', callback: loadSearchTab },
  ],
  navClick: [{ selector: '.nav-link', callback: changeTab }],
};

const handlers = [appHandlers, customerHandlers];

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
