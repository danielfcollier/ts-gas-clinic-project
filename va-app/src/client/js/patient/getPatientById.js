import formFields from './config/formFields';
import schema from './config/schema';

import { getSessionDataById } from '../utils/sessionData';
import { setFormFields } from '../utils/form';

export default function getPatientById(params) {
  const data = getSessionDataById('patientBulkData', params.id);
  setFormFields(formFields, data, schema);
}
