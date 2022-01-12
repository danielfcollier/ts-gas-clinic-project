import inputValidator from './inputValidator';

export default function validateForm(form, validations) {
  const { elements } = form;

  for (let index = 0; index < elements.length; index++) {
    const element = elements[index];
    const { id, value } = element;

    if (validations[id]) {
      inputValidator({ ...validations[id], value, element, placeHolder: '' });
    }
  }

  return true;
}
