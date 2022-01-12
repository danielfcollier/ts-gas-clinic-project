import callServer from '../utils/callServer';
import { storeSessionData } from '../utils/sessionData';

export default function getPatientBulkData() {
  const storeSessionDataCallback = (data) => {
    storeSessionData('patientBulkData', data, false);
  };
  callServer(storeSessionDataCallback, 'serverGetPatientBulkData');
}
