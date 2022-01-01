import backendCall from '../config/server';
import { storeSessionData } from '../utils/sessionData';

export default function getSearchData() {
  const storeSessionDataCallback = (data) => storeSessionData('searchData', data);

  backendCall(storeSessionDataCallback, 'serverGetSearchData');
}
