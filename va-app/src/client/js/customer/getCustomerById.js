import schema from './schema';

import { getSessionDataById } from '../utils/sessionData';
import { setFormFields } from '../utils/form';

export default function getCustomerById(params) {
  const data = getSessionDataById('searchData', params.customerId);

  setFormFields(schema, data);
}
