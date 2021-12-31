import { loadAddCustomerTab, loadEditCustomerTab, loadSearchTab } from './tabs';

function mainHome() {
  document.getElementById('id-search').addEventListener('click', loadSearchTab);
  document.getElementById('id-addcustomer').addEventListener('click', loadAddCustomerTab);
  document.getElementById('id-editcustomer').addEventListener('click', loadEditCustomerTab);
}

mainHome();
