import searchBookingByInput from '../searchBookingByInput';

import { buildTabBooking, buildTabCreateBooking, buildTabUpdateBooking } from '../../app/tabs';

const bookingHandlers = {
  click: [
    { selector: '.createBookingButton', callback: buildTabCreateBooking },
    { selector: '.updateBookingButton', callback: buildTabUpdateBooking },
    //   // { selector: '#updateBookingSaveButton', callback: editCustomer }
  ],
  input: [{ selector: '#search-booking-input', callback: searchBookingByInput }],
};

export default bookingHandlers;
