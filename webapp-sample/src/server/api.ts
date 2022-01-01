import { sheetID } from '../../config/index';
import HtmlPages from '../library/HtmlPages';
import Sheet from '../library/Sheet';

import { oldDeleteById } from './toRemove';

export default class ServerAPI {
  static getSearchData() {
    return Sheet.getData({ id: sheetID, name: 'Database' });
  }

  static deleteCustomerById(id) {
    oldDeleteById(id);
  }

  static buildSearchTab() {
    return HtmlPages.buildPartial('search');
  }

  static buildAddCustomerTab() {
    return HtmlPages.buildPartial('addCustomer');
  }

  static buildEditCustomerTab() {
    return HtmlPages.buildPartial('addCustomer');
  }
}
