import loadTab from './utils/loadTab';

import getBookingData from '../booking/getBookingData';
import getBookingById from '../booking/getBookingById';
import getPatientData from '../patient/getPatientData';
import getPatientById from '../patient/getPatientById';
import getWeekData from '../week/getWeekData';

// Visible

function buildTabBooking() {
  loadTab({ serverFunction: 'serverBuildTabBooking', callback: getBookingData });
}

function buildTabSearchPatient() {
  loadTab({ serverFunction: 'serverBuildTabSearchPatient', callback: getPatientData });
}

function buildTabCreatePatient() {
  loadTab({ serverFunction: 'serverBuildTabCreatePatient' });
}

function buildTabWeeks() {
  loadTab({ serverFunction: 'serverBuildTabWeeks', callback: getWeekData });
}

// Hidden

function buildTabCreateBooking(e) {
  const id = e.target.dataset.patientId;
  const params = { patientId: id };
  loadTab({ serverFunction: 'serverBuildTabCreateBooking', callback: getPatientById, params });
}

function buildTabUpdateBooking(e) {
  const id = e.target.dataset.bookingId;
  const params = { bookingId: id };
  loadTab({ serverFunction: 'serverBuildTabUpdateBooking', callback: getBookingById, params });
}

function buildTabUpdatePatient(e) {
  const id = e.target.dataset.patientId;
  const params = { patientId: id };
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
