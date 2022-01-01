import loadTab from './loadTab';
import getSearchData from '../customer/getSearchData';

function loadSearchTab() {
  loadTab({ buildFunction: 'serverBuildSearchTab', callback: getSearchData });
}

function loadAddCustomerTab() {
  loadTab({ buildFunction: 'serverBuildAddCustomerTab' });
}

function loadEditCustomerTab() {
  loadTab({ buildFunction: 'serverBuildAddCustomerTab' });
}

export { loadSearchTab, loadAddCustomerTab, loadEditCustomerTab };
