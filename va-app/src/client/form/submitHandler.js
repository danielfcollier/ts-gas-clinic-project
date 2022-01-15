import checkFormValidation from './checkFormValidation';

import callServer from '../utils/callServer';
import getFormData from './getFormData';

export default function submitHandler(event, validations, handlers) {
  event.preventDefault();
  event.stopPropagation();

  const form = window.document.getElementById('needs-validation');
  const isValidForm = checkFormValidation(form, validations);

  const { successHandler, failureHandler } = handlers;

  if (isValidForm) {
    // eslint-disable-next-line
    console.log('Form valid!!!');

    const formData = getFormData(form); // JSON.stringify(formData);
    // eslint-disable-next-line
    console.log(formData);

    const { callback, action, params } = successHandler;
    // callServer(callback, action, {...params, formData});
  } else {
    // eslint-disable-next-line
    console.log('Form invalid...');

    const { action, params } = failureHandler;
    // action(params);
  }

  return false;
}
