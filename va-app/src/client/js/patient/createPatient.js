import callServer from '../utils/callServer';
import formFields from './config/formFields';
import { clearFormFields, getFormFields } from '../utils/form';
import { saveStatus } from '../utils/saveStatus';

export default function createPatient() {
  saveStatus('start');
  const formData = getFormFields(formFields);

  const successHandlerCallback = () => {
    clearFormFields(formFields);
    saveStatus('success');
  };
  const serverFunction = 'serverAddPatient';
  const params = formData;

  callServer(successHandlerCallback, serverFunction, params);
}
