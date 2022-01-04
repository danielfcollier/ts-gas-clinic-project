import { deleteCustomer, deleteDisplayConfirmation } from './actionsDelete';
import { editCustomer } from './actionsEdit';
import { searchCustomer } from './actionsSearch';

const customerHandlers = {
  click: [
    { selector: '.beforeDeleteButton', callback: deleteDisplayConfirmation },
    { selector: '.deleteButton', callback: deleteCustomer },
    { selector: '#save-changes', callback: editCustomer },
    // { selector: '#add-customer-button', callback: addCustomer }
  ],
  input: [{ selector: '#search-input', callback: searchCustomer }],
};

export default customerHandlers;
