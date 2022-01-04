import { editSetting } from './actionsEdit';
import schema from './schema';

import callServer from '../utils/callServer';
import { clearFormFields, getFormFields } from '../utils/form';

export default function createPatient() {
  editSetting('start');
  const partialSchema = schema.slice(1);
  const customerInfo = getFormFields(partialSchema);

  const successHandlerCallback = () => {
    clearFormFields(partialSchema);
    editSetting('success');
  };
  const serverFunction = 'serverAddCustomer';
  const params = customerInfo;

  callServer(successHandlerCallback, serverFunction, params);
}
