import checkFormValidation from './checkFormValidation';

export default function submitHandler(event, validations) {
  event.preventDefault();
  event.stopPropagation();

  const form = window.document.getElementById('needs-validation');
  const isValidForm = checkFormValidation(form, validations);

  if (isValidForm) {
    // eslint-disable-next-line
    console.log('Form valid!!!');
  } else {
    // eslint-disable-next-line
    console.log('Form invalid...');
  }

  return false;
}
