import { sheetID } from '../../config';

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
}

export { oldDeleteById };
