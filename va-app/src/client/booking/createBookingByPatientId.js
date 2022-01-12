import formDefault from './config/formDefault';
import formFields from './config/formFields';

import * as patientSchema from '../patient/config/schema';
import checkFormValidation from '../form/checkFormValidation';
import { setFormFields } from '../form/formFields';
import requiredField from '../form/requiredField';
import { getSessionDataById } from '../utils/sessionData';
import setFormEvents from '../form/setFormEvents';
import validateForm from '../form/validateForm';

const filterParams = ['fullName'];

// TODO: mensagem de validação: mostrar e tirar!
const validations = {
  consultationTime: {validator: requiredField },
  consultationDate: { validator: (value) => value === 'R$ 1,00', mask: (value) => `R$ ${value},00`, message: 'ola...' },
  consultationValue: { validator: (value) => value === 'R$ 1,00', placeHolder: 'R$ 0,00', message: 'ola...' },
};

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

  const form = window.document.getElementById('needs-validation');
  // TODO: mudar formFields
  setFormFields([...formFields, ...filterParams], formData);
  setFormEvents(form, validations);
  validateForm(form, validations);
  checkFormValidation(form, validations);
}
