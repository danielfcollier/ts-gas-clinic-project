import displayCancelConfirmation from '../displayCancelConfirmation';
import searchBookingByInput from '../searchBookingByInput';

import { buildTabCreateBooking, buildTabUpdateBooking } from '../../app/tabs';

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
  ],
};

export default bookingHandlers;
