export default class HtmlPages {
  private static buildHtml(filename) {
    const template = HtmlService.createTemplateFromFile(filename);
    const html = template.evaluate();

    return html;
  }

  static buildForMenu(filename, menuTitle) {
    const html = this.buildHtml(filename);
    html.setWidth(850).setHeight(600);

    const ui = SpreadsheetApp.getUi();
    ui.showModalDialog(html, menuTitle);
  }

  static buildWebApp(filename) {
    const html = this.buildHtml(filename);

    return html.setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
  }

  static buildPartial(filename) {
    const html = this.buildHtml(filename);

    return html.getContent();
  }
}
