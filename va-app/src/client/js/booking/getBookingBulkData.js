import displayBookingData from './displayBookingData';

import callServer from '../utils/callServer';
import { storeSessionData } from '../utils/sessionData';

export default function getBookingBulkData() {
  const storeSessionDataCallback = (data) => {
    storeSessionData('iBookingBulkData', data, false);
  };
  callServer(storeSessionDataCallback, 'serverGetIBookingBulkData');
  displayBookingData();
}
