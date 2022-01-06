import createPatient from '../createPatient';
import searchPatientByInput from '../searchPatientByInput';
import { buildTabCreateBooking, buildTabUpdatePatient } from '../../app/tabs';

const patientHandlers = {
  click: [
    { selector: '#createPatientButton', callback: createPatient }, // TODO: ajustar backend
    { selector: '.createBookingButton', callback: buildTabCreateBooking },
    { selector: '.updatePatientButton', callback: buildTabUpdatePatient },
    // { selector: '#save-changes', callback: editCustomer }, // TODO: ajustar backend
    // { selector: '#add-customer-button', callback: addCustomer } // TODO: ajustar backend
  ],
  input: [{ selector: '#search-patient-input', callback: searchPatientByInput }],
};

export default patientHandlers;
