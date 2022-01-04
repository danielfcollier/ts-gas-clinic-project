import { clickEventHandler, inputEventHandler, navClickEventHandler } from './handlers';
import { loadAddCustomerTab, loadSearchTab } from './tabs';

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
