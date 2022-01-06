import displayBookingData from './displayBookingData';

import callServer from '../utils/callServer';
import { storeSessionData } from '../utils/sessionData';

function setBookingTabActive() {
  const tabLinks = window.document.querySelectorAll('.main-nav .nav-link');

  tabLinks.forEach((tabLink) => {
    tabLink.classList.remove('active');
  });

  window.document.getElementById('nav-booking').classList.add('active');
}

export default function getBookingBulkData() {
  const storeSessionDataCallback = (data) => {
    storeSessionData('iBookingBulkData', data, false);
  };
  callServer(storeSessionDataCallback, 'serverGetIBookingBulkData');
  displayBookingData();
  setBookingTabActive();
}
