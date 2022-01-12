import inputValidator from './inputValidator';

export default function validateForm(form, validations) {
  const { elements } = form;

  for (let index = 0; index < elements.length; index++) {
    const element = elements[index];
    const { id } = element;

    if (validations[id]) {
      inputValidator({ placeHolder: '', ...validations[id], element });
    }
  }

  return true;
}
