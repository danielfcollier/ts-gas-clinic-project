// import { deleteCustomer, deleteDisplayConfirmation } from './customer/editCustomer';
import loadSearchResults from './customer/searchCustomer';

const handlers = {
  click: [
    // { selector: '.beforeDeleteButton', callback: deleteDisplayConfirmation },
    // { selector: '.deleteButton', callback: deleteCustomer },
  ],
  input: [{ selector: '#search-input', callback: loadSearchResults }],
};

function clickEventHandler(e) {
  for (const handler of handlers.click) {
    if (e.target.matches(handler.selector)) {
      handler.callback(e);
      break;
    }
  }
}

function inputEventHandler(e) {
  for (const handler of handlers.input) {
    if (e.target.matches(handler.selector)) {
      handler.callback(e);
      break;
    }
  }
}

export { clickEventHandler, inputEventHandler };
