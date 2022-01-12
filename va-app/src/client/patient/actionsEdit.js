import schema from './config/schema';

import { loadSearchTab } from '../app/tabs';
import { TIMEOUT } from '../config/env';
import callServer from '../utils/callServer';
import { clearFormFields, getFormFields } from '../utils/form';
import saveStatus from '../utils/saveStatus';

function editCustomer() {
  saveStatus('start');

  const customerInfo = getFormFields(schema);

  const successHandlerCallback = () => {
    clearFormFields(schema);
    saveStatus('success');
    setTimeout(loadSearchTab, TIMEOUT);
  };
  const serverFunction = 'serverEditCustomer';
  const params = customerInfo;

  callServer(successHandlerCallback, serverFunction, params);
}

export { editCustomer, saveStatus };
