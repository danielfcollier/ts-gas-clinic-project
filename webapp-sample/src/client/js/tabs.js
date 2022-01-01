import loadTab from './functions/loadTab';
import getSearchData from './customer/getSearchData';

function loadSearchTab() {
  loadTab({ buildFunction: 'ServerAPI.buildSearchTab', callback: getSearchData });
}

function loadAddCustomerTab() {
  loadTab({ buildFunction: 'ServerAPI.buildAddCustomerTab' });
}

function loadEditCustomerTab() {
  loadTab({ buildFunction: 'ServerAPI.buildAddCustomerTab' });
}

export { loadSearchTab, loadAddCustomerTab, loadEditCustomerTab };
