import build from './search/build';
import template from './search/template';

import { retrieveSessionData } from '../utils/sessionData';

export function searchCustomer() {
  const search = {
    data: retrieveSessionData('searchData'),
    input: window.document.getElementById('search-input').value,
    box: window.document.getElementById('search-results'),
    template: window.document.getElementById('search-template').content,
  };

  const clearResults = () => {
    search.box.innerHTML = '';
  };

  clearResults();

  if (!search.input) {
    return true;
  }

  const searchResults = search.data.filter((record) => {
    const searchField = 'fullName';
    const index = template.indexOf(searchField);
    const content = record[index].toString().toLowerCase();
    return content.includes(search.input.toLowerCase());
  });

  build({ ...search, results: searchResults });
}
