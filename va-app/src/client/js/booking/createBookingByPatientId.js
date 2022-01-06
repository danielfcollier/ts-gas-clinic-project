import formDefault from './config/formDefault';
import formFields from './config/formFields';

import * as patientSchema from '../patient/config/schema';
import { getSessionDataById } from '../utils/sessionData';
import { setFormFields } from '../utils/form';

const filterParams = ['fullName'];

export default function createBookingByPatientId(params) {
  const patientData = getSessionDataById('patientBulkData', params.patientId);

  const filterValues = [];
  filterParams.forEach((element) => {
    let paramIndex;
    patientSchema.default.forEach((paramName, index) => {
      if (element === paramName) {
        paramIndex = index;
      }
    });
    filterValues.push(patientData[paramIndex]);
  });

  const formData = [...formDefault, ...filterValues];

  setFormFields([...formFields, ...filterParams], formData);
}
