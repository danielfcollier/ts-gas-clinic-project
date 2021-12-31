import getSearchData from './functions/getSearchData';
import loadTab from './functions/loadTab';

export function loadSearchTab() {
  loadTab({ buildFunction: 'buildSearchTab', callback: getSearchData });
}

export function loadAddCustomerTab() {
  loadTab({ buildFunction: 'buildAddCustomerTab' });
}

export function loadEditCustomerTab() {
  loadTab({ buildFunction: 'buildAddCustomerTab' });
}
