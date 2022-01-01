import { sheetID } from '../../config/index';
import HtmlPages from '../library/HtmlPages';
import Sheet from '../library/Sheet';

import { oldDeleteById } from './toRemove';

function serverBuildSearchTab() {
  return HtmlPages.buildPartial('search');
}

function serverBuildAddCustomerTab() {
  return HtmlPages.buildPartial('addCustomer');
}

function serverBuildEditCustomerTab() {
  return HtmlPages.buildPartial('addCustomer');
}

function serverGetSearchData() {
  return Sheet.getData({ id: sheetID, name: 'Database' });
}

function serverDeleteCustomerById(id) {
  return true;
  // oldDeleteById(id);
}

export {
  serverBuildSearchTab,
  serverBuildAddCustomerTab,
  serverBuildEditCustomerTab,
  serverGetSearchData,
  serverDeleteCustomerById,
};
