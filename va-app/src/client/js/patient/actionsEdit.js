import schema from './config/schema';

import { loadSearchTab } from '../app/tabs';
import { TIMEOUT } from '../config/env';
import callServer from '../utils/callServer';
import { clearFormFields, getFormFields } from '../utils/form';

function editSetting(type) {
  if (type === 'start') {
    window.document.getElementById('save-success-alert').classList.add('invisible');
  }

  if (type === 'success') {
    window.document.getElementById('save-success-alert').classList.remove('invisible');
    return true;
  }
}

function editCustomer() {
  editSetting('start');

  const customerInfo = getFormFields(schema);

  const successHandlerCallback = () => {
    clearFormFields(schema);
    editSetting('success');
    setTimeout(loadSearchTab, TIMEOUT);
  };
  const serverFunction = 'serverEditCustomer';
  const params = customerInfo;

  callServer(successHandlerCallback, serverFunction, params);
}

export { editCustomer, editSetting };
