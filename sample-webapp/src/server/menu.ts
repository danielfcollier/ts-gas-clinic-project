import HtmlPages from '../library/HtmlPages';

export function onOpen() {
  createSheetMenu();
}

function createSheetMenu() {
  const ui = SpreadsheetApp.getUi();
  const menu = ui.createMenu('Débora Secretária');
  menu.addItem('Sistema de Agendamento', 'menuHomePage');
  menu.addToUi();
}

export function menuHomePage() {
  return HtmlPages.buildForMenu('home', 'Sistema de Agendamento');
}
