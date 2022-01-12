import tabLoad from './utils/tabLoad';

import createBookingByPatientId from './booking/createBookingByPatientId';
import getBookingBulkData from './booking/getBookingBulkData';
import getBookingById from './booking/getBookingById';
import getPatientById from './patient/getPatientById';
import getPatientBulkData from './patient/getPatientBulkData';
import getWeekData from './week/getWeekData';

// Visible

function buildTabBooking() {
  tabLoad({ serverFunction: 'serverBuildTabBooking', callback: getBookingBulkData });
}

function buildTabSearchPatient() {
  tabLoad({ serverFunction: 'serverBuildTabSearchPatient', callback: getPatientBulkData });
}

function buildTabCreatePatient() {
  tabLoad({ serverFunction: 'serverBuildTabCreatePatient' });
}

function buildTabWeeks() {
  tabLoad({ serverFunction: 'serverBuildTabWeeks', callback: getWeekData });
}

// Hidden

function buildTabCreateBooking(e) {
  const id = e.target.dataset.id;
  const params = { patientId: id };
  tabLoad({ serverFunction: 'serverBuildTabCreateBooking', callback: createBookingByPatientId, params });
}

function buildTabUpdateBooking(e) {
  const id = e.target.dataset.id;
  const params = { id };
  tabLoad({ serverFunction: 'serverBuildTabUpdateBooking', callback: getBookingById, params });
}

function buildTabUpdatePatient(e) {
  const id = e.target.dataset.id;
  const params = { id };
  tabLoad({ serverFunction: 'serverBuildTabUpdatePatient', callback: getPatientById, params });
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
