// This function exposes the application as a webapp in the Google Apps Script enviroment
import HtmlPages from './library/HtmlPages';

function doGet() {
  return HtmlPages.buildWebApp('app');
}

export default doGet;
