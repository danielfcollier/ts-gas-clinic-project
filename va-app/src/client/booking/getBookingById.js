import formFields from './config/formFields';

import checkFormValidation from '../form/checkFormValidation';
import { setFormFields } from '../form/formFields';
import { getSessionDataById } from '../utils/sessionData';
import setFormEvents from '../form/setFormEvents';
import validateForm from '../form/validateForm';

import schema from './config/schema';
import requiredField from '../form/requiredField';
import selectOptions from './config/selectOptions';
import paymentHandler from './config/paymentHandler';

const validations = {
  consultationTime: { validator: requiredField },
  consultationDate: {
    validator: (value) => value === 'R$ 1,00',
    placeHolder: 'R$ 0,00',
    mask: (value) => `R$ ${value},00`,
    message: 'ola...'
  },
  consultationValue: {
    validator: (value) => value === '003.212.781-27',
    placeHolder: '000.000.000-00',
    message: 'ola...'
  }
};

export default function getBookingById(params) {
  const data = getSessionDataById('iBookingBulkData', params.id);
  const patientFields = ['fullName'];
  const newFormFields = [...formFields, ...patientFields];
  setFormFields(newFormFields, data, selectOptions, schema);

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

  //   validateForm(form, validations);
  //   checkFormValidation(form, validations);
}
