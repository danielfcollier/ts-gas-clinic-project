import build from './search/build';
import transforms from './search/transforms';

import { retrieveSessionData } from '../utils/sessionData';

export default function displayBookingData() {
  const display = {
    data: retrieveSessionData('iBookingBulkData'),
    box: window.document.getElementById('search-results'),
    template: window.document.getElementById('search-template').content
  };

  const displayResults = display.data;

  build({ ...display, results: displayResults }, transforms);
}
