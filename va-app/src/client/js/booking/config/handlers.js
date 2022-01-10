import displayCancelConfirmation from '../displayCancelConfirmation';
import searchBookingByInput from '../searchBookingByInput';

import { buildTabCreateBooking, buildTabUpdateBooking } from '../../app/tabs';

function validateCurrency() {
  // eslint-disable-next-line
  console.log('Ola');
  const input = window.document.getElementById('consultationValue').value;
  // eslint-disable-next-line
  console.log({ input });

  if (input === 1) {
    return true;
  }

  return false;
}

function submitCreateBooking(e) {
  // eslint-disable-next-line
  console.log(e);
}

const bookingHandlers = {
  click: [
    { selector: '.confirmCancelBookingButton', callback: displayCancelConfirmation },
    { selector: '.createBookingButton', callback: buildTabCreateBooking },
    { selector: '.updateBookingButton', callback: buildTabUpdateBooking },
    // { selector: '#submitButton', callback: submitCreateBooking },
    //   // { selector: '#updateBookingSaveButton', callback: editCustomer }
  ],
  input: [
    { selector: '#search-booking-input', callback: searchBookingByInput },
    { selector: '#consultationValue', callback: validateCurrency },
  ],
};

export default bookingHandlers;
