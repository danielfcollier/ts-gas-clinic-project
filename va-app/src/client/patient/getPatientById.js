import formFields from './config/formFields';
import schema from './config/schema';

import { getSessionDataById } from '../utils/sessionData';
import { setFormFields } from '../form/formFields';

export default function getPatientById(params) {
  const data = getSessionDataById('patientBulkData', params.id);
  setFormFields([...formFields, 'id'], data, schema);
}
