import createPatient from './createPatient';

const patientHandlers = {
  click: [
    { selector: '#createPatientButton', callback: createPatient },
    // { selector: '.beforeDeleteButton', callback: deleteDisplayConfirmation },
    // { selector: '.deleteButton', callback: deleteCustomer },
    // { selector: '#save-changes', callback: editCustomer },
    // { selector: '#add-customer-button', callback: addCustomer }
  ],
  input: [{ selector: '#search-input', callback: searchCustomer }],
};

export default patientHandlers;
