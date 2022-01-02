import callServer from '../utils/callServer';
import { removeSessionDataById, retrieveSessionData } from '../utils/sessionData';

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

  const successHandlerCallback = function () {
    e.target.closest('.result-box').remove();
    removeSessionDataById('searchData', id);
  };
  const serverFunction = 'serverDeleteCustomerById';
  const params = id;

  callServer(successHandlerCallback, serverFunction, params);
}

export { deleteCustomer, deleteDisplayConfirmation };
