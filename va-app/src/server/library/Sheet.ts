export default class Sheet {
  static getBulkData(sheetParams) {
    const sheet = SpreadsheetApp.openById(sheetParams.id).getSheetByName(sheetParams.name);

    const startRow = 2;
    const startColumn = 1;
    const lengthRow = sheet.getMaxRows() - (startRow - 1);
    const lengthColumn = sheet.getMaxColumns() - (startColumn - 1);

    return sheet.getRange(startRow, startColumn, lengthRow, lengthColumn).getValues();
  }
}
