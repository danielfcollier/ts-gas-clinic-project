import loadTab from './utils/loadTab';

import getBookingBulkData from '../booking/getBookingBulkData';
import getBookingById from '../booking/getBookingById';
import getPatientById from '../patient/getPatientById';
import getPatientBulkData from '../patient/getPatientBulkData';
import getWeekData from '../week/getWeekData';

// Visible

function buildTabBooking() {
  loadTab({ serverFunction: 'serverBuildTabBooking', callback: getBookingBulkData });
}

function buildTabSearchPatient() {
  loadTab({ serverFunction: 'serverBuildTabSearchPatient', callback: getPatientBulkData });
}

function buildTabCreatePatient() {
  loadTab({ serverFunction: 'serverBuildTabCreatePatient' });
}

function buildTabWeeks() {
  loadTab({ serverFunction: 'serverBuildTabWeeks', callback: getWeekData });
}

// Hidden

function buildTabCreateBooking(e) {
  const id = e.target.dataset.id;
  const params = { patientId: id };
  loadTab({ serverFunction: 'serverBuildTabCreateBooking', callback: getPatientById, params });
}

function buildTabUpdateBooking(e) {
  const id = e.target.dataset.bookingId;
  const params = { bookingId: id };
  loadTab({ serverFunction: 'serverBuildTabUpdateBooking', callback: getBookingById, params });
}

function buildTabUpdatePatient(e) {
  const id = e.target.dataset.id;
  const params = { id };
  loadTab({ serverFunction: 'serverBuildTabUpdatePatient', callback: getPatientById, params });
}

export {
  buildTabBooking,
  buildTabCreateBooking,
  buildTabCreatePatient,
  buildTabUpdateBooking,
  buildTabUpdatePatient,
  buildTabSearchPatient,
  buildTabWeeks,
};
