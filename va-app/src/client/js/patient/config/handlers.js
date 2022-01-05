import createPatient from '../createPatient';
import searchPatientByInput from '../searchPatientByInput';

const patientHandlers = {
  click: [
    { selector: '#createPatientButton', callback: createPatient },
    // { selector: '.createBookingButton', callback: createBookingByPatientId },
    // { selector: '.editPatientButton', callback: editPatientById },
    // { selector: '#save-changes', callback: editCustomer },
    // { selector: '#add-customer-button', callback: addCustomer }
  ],
  input: [{ selector: '#search-patient-input', callback: searchPatientByInput }],
};

export default patientHandlers;
