import formDefault from './config/formDefault';
import formFields from './config/formFields';

import * as patientSchema from '../patient/config/schema';
import { getSessionDataById } from '../utils/sessionData';
import { setFormFields } from '../utils/form';

const filterParams = ['fullName'];

import inputValidator from '../utils/inputValidator';

// TODO: mensagem de validação: mostrar e tirar!
const inputsToValidate = {
  consultationDate: { validator: (value) => value === 'R$ 1,00', mask: (value) => `R$ ${value},00` },
  consultationValue: { validator: (value) => value === 'R$ 1,00', placeHolder: 'R$ 0,00' },
};

function inputHandler(e) {
  const { id } = e.target;
  const element = window.document.getElementById(id);
  const { value } = element;
  const previousValue = value.slice(0, -1);

  if (inputsToValidate[id].mask) {
    element.value = inputsToValidate[id].mask(value, previousValue);
  }

  if (inputsToValidate[id].validator) {
    inputValidator({ ...inputsToValidate[id], value: element.value, element });
  }

  return true;
}

function validateForm(form) {
  const { elements } = form;

  for (let index = 0; index < elements.length; index++) {
    const element = elements[index];
    const { id, value } = element;

    if (inputsToValidate[id]) {
      inputValidator({ ...inputsToValidate[id], value, element, placeHolder: '' });
    }
  }

  return true;
}

function checkFormValidation(form) {
  const { elements } = form;

  for (let index = 0; index < elements.length; index++) {
    const element = elements[index];
    const { id } = element;

    if (inputsToValidate[id]) {
      const isFormInvalid = !element.classList.contains('is-valid');

      if (isFormInvalid) return false;
    }
  };

  return true;
}

function submitHandler(e) {
  e.preventDefault();
  e.stopPropagation();

  const form = window.document.getElementById('needs-validation');
  checkFormValidation(form);

  return false;
}

function setFormEvents(form) {
  form.addEventListener('input', inputHandler);
  form.addEventListener('submit', submitHandler);
}

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
  setFormEvents(form);
  validateForm(form);
  checkFormValidation(form);
}
