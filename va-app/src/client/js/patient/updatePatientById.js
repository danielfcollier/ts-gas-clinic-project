import schema from './config/schema';

import { buildTabSearchPatient } from '../app/tabs';
import { TIMEOUT } from '../config/env';
import callServer from '../utils/callServer';
import { clearFormFields, getFormFields } from '../utils/form';
import saveStatus from '../utils/saveStatus';

export default function updatePatientById() {
  saveStatus('start');

  const data = getFormFields(schema);

  const successHandlerCallback = () => {
    clearFormFields(schema);
    saveStatus('success');
    setTimeout(buildTabSearchPatient, TIMEOUT);
  };
  const serverFunction = 'serverUpdatePatientById';
  const params = data;

  callServer(successHandlerCallback, serverFunction, params);
}
