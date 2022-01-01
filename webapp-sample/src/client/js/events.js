import { loadAddCustomerTab, loadEditCustomerTab, loadSearchTab } from './tabs';
import { clickEventHandler, inputEventHandler } from './handlers';

const events = [
  {
    id: 'id-search',
    type: 'click',
    callback: loadSearchTab,
  },
  {
    id: 'id-addcustomer',
    type: 'click',
    callback: loadAddCustomerTab,
  },
  {
    id: 'id-editcustomer',
    type: 'click',
    callback: loadEditCustomerTab,
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
];

export default events;
