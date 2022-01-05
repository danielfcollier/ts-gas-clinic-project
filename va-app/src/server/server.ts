import { SHEET } from '../../config/env';
import HtmlPages from '../library/HtmlPages';
import Sheet from '../library/Sheet';

// TODO: substitute this function.
function oldDeleteById(id) {
  const sheet = SHEET.PATIENT;
  const ss = SpreadsheetApp.openById(sheet.id);
  const ws = ss.getSheetByName(sheet.name);
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
  const sheet = SHEET.PATIENT;
  const ss = SpreadsheetApp.openById(sheet.id);
  const ws = ss.getSheetByName(sheet.name);
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

// Build HTML Components

function serverBuildTabBooking() {
  return HtmlPages.buildPartial('booking');
}

function serverBuildTabCreateBooking() {
  return HtmlPages.buildPartial('createBooking');
}

function serverBuildTabCreatePatient() {
  return HtmlPages.buildPartial('createPatient');
}

function serverBuildTabUpdateBooking() {
  return HtmlPages.buildPartial('updateBooking');
}

function serverBuildTabUpdatePatient() {
  return HtmlPages.buildPartial('updatePatient');
}

function serverBuildTabSearchPatient() {
  return HtmlPages.buildPartial('searchPatient');
}

function serverBuildTabWeeks() {
  return HtmlPages.buildPartial('weeks');
}

// Server-side functions

function serverGetBookingBulkData() {
  const data = Sheet.getBulkData(SHEET.BOOKING);
  return JSON.stringify(data);
}

function serverGetIBookingBulkData() {
  const data = Sheet.getBulkData(SHEET.IBOOKING);
  return JSON.stringify(data);
}

function serverGetPatientBulkData() {
  const data = Sheet.getBulkData(SHEET.PATIENT);
  return JSON.stringify(data);
}

function serverAddPatient(patientData) {
  return oldAddCustomer(patientData);
}

function serverDeleteCustomerById(id) {
  return oldDeleteById(id);
}

function serverEditCustomer(customerInfo) {
  return oldEditCustomer(customerInfo);
}

export {
  serverBuildTabBooking,
  serverBuildTabCreateBooking,
  serverBuildTabCreatePatient,
  serverBuildTabUpdateBooking,
  serverBuildTabUpdatePatient,
  serverBuildTabSearchPatient,
  serverBuildTabWeeks,
  serverGetBookingBulkData,
  serverGetIBookingBulkData,
  serverGetPatientBulkData,
  serverAddPatient,
  serverDeleteCustomerById,
  serverEditCustomer,
};
