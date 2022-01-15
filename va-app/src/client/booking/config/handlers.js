import displayCancelConfirmation from '../displayCancelConfirmation';
import searchBookingByInput from '../searchBookingByInput';

import { buildTabCreateBooking, buildTabUpdateBooking } from '../../tabs';
import paymentHandler from './paymentHandler';

const bookingHandlers = {
  click: [
    { selector: '.confirmCancelBookingButton', callback: displayCancelConfirmation },
    { selector: '.createBookingButton', callback: buildTabCreateBooking },
    { selector: '.updateBookingButton', callback: buildTabUpdateBooking }
    // { selector: '#submitButton', callback: submitCreateBooking },
    // { selector: '#updateBookingSaveButton', callback: editCustomer }
  ],
  input: [{ selector: '#search-booking-input', callback: searchBookingByInput }],
  change: [{ selector: '#paymentMethod', callback: paymentHandler }]
};

export default bookingHandlers;
