import formFields from './config/formFields';
import schema from './config/schema';

import { getSessionDataById } from '../utils/sessionData';
import { setFormFields } from '../form/formFields';

export default function getBookingById(params) {
  const data = getSessionDataById('iBookingBulkData', params.id);
  setFormFields([...formFields, 'id', 'fullName'], data, schema);
}
