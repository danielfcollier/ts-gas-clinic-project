import HtmlPages from '../library/HtmlPages';

export function onOpen() {
  createSheetMenu();
}

function createSheetMenu() {
  const ui = SpreadsheetApp.getUi();
  const menu = ui.createMenu('Débora Secretária');
  menu.addItem('Sistema de Agendamento', 'menuAppPage');
  menu.addToUi();
}

export function menuAppPage() {
  return HtmlPages.buildForMenu('app', 'Sistema de Agendamento');
}
