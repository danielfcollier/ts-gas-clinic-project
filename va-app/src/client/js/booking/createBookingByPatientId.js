import formDefault from './config/formDefault';
import formFields from './config/formFields';

import * as patientSchema from '../patient/config/schema';
import { getSessionDataById } from '../utils/sessionData';
import { setFormFields } from '../utils/form';

const filterParams = ['fullName'];

export default function createBookingByPatientId(params) {
  const form = window.document.getElementById('needs-validation');

  // Loop over them and prevent submission

  form.addEventListener(
    'submit',
    (event) => {
      event.preventDefault();
      event.stopPropagation();
      // form.classList.add('was-validated');
      // eslint-disable-next-line
      console.log({ msg: 'here 1', form });

      for (let index = 0; index < form.elements.length; index++) {
        const element = form.elements[index];
        const { id, value } = element;
        // eslint-disable-next-line
        console.log({ id, value, element });
        if (value === '2') {
          element.classList.add('is-invalid');
          return false;
        }
      };

      // eslint-disable-next-line
      console.log('Success process here...');

      // form.classList.add('was-validated');
      return false;
    },
    false,
  );

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
