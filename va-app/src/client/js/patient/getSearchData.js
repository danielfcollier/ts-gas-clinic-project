import callServer from '../utils/callServer';
import { storeSessionData } from '../utils/sessionData';

export default function getSearchData() {
  const storeSessionDataCallback = (data) => storeSessionData('searchData', data);

  callServer(storeSessionDataCallback, 'serverGetSearchData');
}
