import searchBookingByInput from '../searchBookingByInput';

const bookingHandlers = {
  // click: [
  //   // { selector: '#createPatientButton', callback: createPatient },
  //   // { selector: '.beforeDeleteButton', callback: deleteDisplayConfirmation },
  //   // { selector: '.deleteButton', callback: deleteCustomer },
  //   // { selector: '#save-changes', callback: editCustomer },
  //   // { selector: '#add-customer-button', callback: addCustomer }
  // ],
  input: [{ selector: '#search-booking-input', callback: searchBookingByInput }],
};

export default bookingHandlers;
