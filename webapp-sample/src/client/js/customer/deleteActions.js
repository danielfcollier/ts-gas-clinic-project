import { loadingEnd, loadingStart } from '../config/loading';
import callServer from '../config/server';
import { retrieveSessionData } from '../utils/sessionData';

function deleteDisplayConfirmation(e) {
  if (e.target.dataset.buttonState === 'delete') {
    e.target.previousElementSibling.classList.remove('d-none');
    e.target.textContent = 'Cancel';
    e.target.dataset.buttonState = 'cancel';
  } else {
    e.target.previousElementSibling.classList.add('d-none');
    e.target.textContent = 'Delete';
    e.target.dataset.buttonState = 'delete';
  }
}

function deleteCustomer(e) {
  const id = e.target.dataset.customerId.toString().toLowerCase();
  loadingStart();
  const successHandlerCallback = function () {
    e.target.closest('.result-box').remove();
    const searchData = retrieveSessionData('searchData');
    const ids = searchData.map(function (r) {
      return r[0].toString().toLowerCase();
    });
    const index = ids.indexOf(id);
    searchData.splice(index, 1);
    loadingEnd();
  };
  const buildFunction = 'serverDeleteCustomerById';
  const params = id;
  callServer(successHandlerCallback, buildFunction, params);
}

export { deleteCustomer, deleteDisplayConfirmation };
