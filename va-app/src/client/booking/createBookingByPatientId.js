import formDefault from './config/formDefault';
import formFields from './config/formFields';

import * as patientSchema from '../patient/config/schema';
import checkFormValidation from '../form/checkFormValidation';
import { setFormFields } from '../form/formFields';
import requiredField from '../form/requiredField';
import { getSessionDataById } from '../utils/sessionData';
import setFormEvents from '../form/setFormEvents';
import validateForm from '../form/validateForm';
import selectOptions from './config/selectOptions';
import paymentHandler from './config/paymentHandler';

const patientParams = ['fullName', 'id', 'status', 'customerId', 'documentCountry', 'birthDay', 'email'];
const patientFields = ['fullName', 'patientId', 'patientStatus', 'customerId', 'documentCountry', 'birthDay', 'email'];

function cleanNumber(number) {
  return number.replace(/\D/g, '');
}

function postalCode(postalCode) {
  return cleanNumber(postalCode).replace(/(\d{2})(\d{3})(\d{3})/, '$1.$2-$3');
}

function documentCountry(documentString) {
  const documentNumbers = cleanNumber(documentString);
  if (documentNumbers.length <= 3) {
    return documentNumbers;
  } else if (documentNumbers.length <= 6) {
    return documentNumbers.replace(/(\d{3})(\d{1,})/, '$1.$2');
  } else if (documentNumbers.length <= 9) {
    return documentNumbers.replace(/(\d{3})(\d{3})(\d{1,})/, '$1.$2.$3');
  } else if (documentNumbers.length <= 11) {
    return documentNumbers.replace(/(\d{3})(\d{3})(\d{3})(\d{1,})/, '$1.$2.$3-$4');
  } else if (documentNumbers.length <= 14) {
    return documentNumbers.replace(/(\d{3})(\d{3})(\d{3})(\d{1,})/, '$1.$2.$3/$4');
  }
}

const validations = {
  consultationTime: { validator: requiredField, mask: postalCode },
  consultationDate: {
    validator: (value) => value === 'R$ 1,00',
    placeHolder: 'R$ 0,00',
    mask: (value) => `R$ ${value},00`,
    message: 'ola...'
  },
  consultationValue: {
    validator: (value) => value === '003.212.781-27',
    mask: documentCountry,
    placeHolder: '000.000.000-00',
    message: 'ola...'
  }
};

function initMixedForm(params) {
  const newFormFields = [...formFields, ...patientFields];

  const patientData = getSessionDataById('patientBulkData', params.patientId);
  const patientValues = [];
  patientParams.forEach((element) => {
    let paramIndex;
    patientSchema.default.forEach((paramName, index) => {
      if (element === paramName) {
        paramIndex = index;
      }
    });
    patientValues.push(patientData[paramIndex]);
  });

  const patientStatus = patientValues[patientFields.indexOf('patientStatus')];
  const fieldValues = formDefault(patientStatus);
  const newFormData = [...fieldValues, ...patientValues];

  return { formData: newFormData, formFields: newFormFields };
}

export default function createBookingByPatientId(params) {
  const mixedForm = initMixedForm(params);
  setFormFields(mixedForm.formFields, mixedForm.formData, selectOptions);

  const handlers = {
    successHandler: {
      callback: 1, // successHandlerCallback
      action: 2, // serverFunction
      params: 3 // params form server function
    },
    failureHandler: {
      action: 1, // function
      params: 2 // params
    }
  };

  setFormEvents(validations, handlers);
  paymentHandler();

  // validateForm(form, validations);
  // checkFormValidation(form, validations);
}
