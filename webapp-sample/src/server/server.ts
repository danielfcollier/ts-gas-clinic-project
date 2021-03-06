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

// TODO: substitute this function.
function oldEditCustomer(customerInfo) {
  const ss = SpreadsheetApp.openById(sheetID);
  const ws = ss.getSheetByName('Database');
  const customerIds = ws
    .getRange(2, 1, ws.getLastRow() - 1, 1)
    .getValues()
    .map((r) => r[0].toString().toLowerCase());
  const posIndex = customerIds.indexOf(customerInfo.customerId.toString().toLowerCase());
  const rowNumber = posIndex === -1 ? 0 : posIndex + 2;
  ws.getRange(rowNumber, 2, 1, 3).setValues([[customerInfo.fullName, customerInfo.email, customerInfo.gender]]);
  return true;
}

// TODO: substitute this function.
function oldAddCustomer(customerInfo) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const ws = ss.getSheetByName('Database');
  const idArray = ws.getRange(2, 1, ws.getLastRow() - 1, 1).getValues();
  let maxNum = 0;
  idArray.forEach((r) => {
    maxNum = r[0] > maxNum ? r[0] : maxNum;
  });

  const newId = maxNum + 1;

  ws.appendRow([newId, customerInfo.fullName, customerInfo.email, customerInfo.gender]);
}

function serverBuildSearchTab() {
  return HtmlPages.buildPartial('searchCustomer');
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

function serverAddCustomer(customerInfo) {
  return oldAddCustomer(customerInfo);
}

function serverDeleteCustomerById(id) {
  return oldDeleteById(id);
}

function serverEditCustomer(customerInfo) {
  return oldEditCustomer(customerInfo);
}

export {
  serverBuildSearchTab,
  serverBuildAddCustomerTab,
  serverBuildEditCustomerTab,
  serverGetSearchData,
  serverAddCustomer,
  serverDeleteCustomerById,
  serverEditCustomer,
};
