import loadTab from './utils/loadTab';

import getCustomerById from '../customer/getCustomerById';
import getSearchData from '../customer/getSearchData';

function loadSearchTab() {
  loadTab({ serverFunction: 'serverBuildSearchTab', callback: getSearchData });
}

function loadAddCustomerTab() {
  loadTab({ serverFunction: 'serverBuildAddCustomerTab' });
}

function loadEditCustomerTab(e) {
  const id = e.target.dataset.customerId;
  const params = { customerId: id };
  loadTab({ serverFunction: 'serverBuildEditCustomerTab', callback: getCustomerById, params });
}

export { loadSearchTab, loadAddCustomerTab, loadEditCustomerTab };
