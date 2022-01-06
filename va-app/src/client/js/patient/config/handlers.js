import createPatient from '../createPatient';
import searchPatientByInput from '../searchPatientByInput';
import { buildTabBooking, buildTabUpdatePatient } from '../../app/tabs';

const patientHandlers = {
  click: [
    // { selector: '#createPatientButton', callback: createPatient }, // TODO: ajustar backend
    { selector: '.updatePatientButton', callback: buildTabUpdatePatient },
    // { selector: '#updatePatientSaveButton', callback: editCustomer }, // TODO: ajustar backend
  ],
  input: [{ selector: '#search-patient-input', callback: searchPatientByInput }],
};

export default patientHandlers;
