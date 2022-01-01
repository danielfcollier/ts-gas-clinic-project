import { sheetID } from '../../config/index';
import HtmlPages from '../library/HtmlPages';
import Sheet from '../library/Sheet';

// TODO: substitute this function.
function oldDeleteById(id) {
  const ss = SpreadsheetApp.openById(sheetID);
  const ws = ss.getSheetByName('Database');
  const customerIds = ws
    .getRange(2, 1, ws.getLastRow() - 1, 1)
    .getValues()
    .map((r) => r[0].toString().toLowerCase());
  const posIndex = customerIds.indexOf(id.toString().toLowerCase());
  const rowNumber = posIndex === -1 ? 0 : posIndex + 2;
  ws.deleteRow(rowNumber);
  return true;
}

function serverBuildSearchTab() {
  return HtmlPages.buildPartial('search');
}

function serverBuildAddCustomerTab() {
  return HtmlPages.buildPartial('addCustomer');
}

function serverBuildEditCustomerTab() {
  return HtmlPages.buildPartial('editCustomer');
}

function serverGetSearchData() {
  return Sheet.getData({ id: sheetID, name: 'Database' });
}

function serverDeleteCustomerById(id) {
  return oldDeleteById(id);
}

export {
  serverBuildSearchTab,
  serverBuildAddCustomerTab,
  serverBuildEditCustomerTab,
  serverGetSearchData,
  serverDeleteCustomerById,
};