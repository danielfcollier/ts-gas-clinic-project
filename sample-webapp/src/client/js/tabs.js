import loadTab from './functions/loadTab';

export function loadSearchTab() {
  loadTab({ buildFunction: 'buildSearchTab' });
}

export function loadAddCustomerTab() {
  loadTab({ buildFunction: 'buildAddCustomerTab' });
}

export function loadEditCustomerTab() {
  loadTab({ buildFunction: 'buildAddCustomerTab' });
}
