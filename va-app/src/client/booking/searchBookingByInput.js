import displayBookingData from './displayBookingData';
import build from './search/build';
import template from './search/template';
import transforms from './search/transforms';

import { retrieveSessionData } from '../utils/sessionData';

const searchField = 'fullName';

export default function searchBookingByInput() {
  const search = {
    data: retrieveSessionData('iBookingBulkData'),
    input: window.document.getElementById('search-booking-input').value,
    box: window.document.getElementById('search-results'),
    template: window.document.getElementById('search-template').content
  };

  const clearResults = () => {
    search.box.innerHTML = '';
  };

  clearResults();

  if (!search.input) {
    displayBookingData();
    return true;
  }

  const searchResults = search.data.filter((record) => {
    const position = template
      .filter((element) => {
        const [parameter] = element;
        return parameter === searchField;
      })
      .map((element) => {
        const [, position] = element;
        return position;
      })[0];
    const content = record[position].toString().toLowerCase();

    return content.includes(search.input.toLowerCase());
  });

  build({ ...search, results: searchResults }, transforms);
}
