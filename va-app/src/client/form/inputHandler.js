import inputValidator from './inputValidator';

export default function inputHandler(event, validations) {
  const { id } = event.target;
  const element = window.document.getElementById(id);
  const { value } = element;
  // const previousValue = value.slice(0, -1);

  if (validations[id].mask) {
    element.value = validations[id].mask(value);
  }

  if (validations[id].validator) {
    inputValidator({ ...validations[id], value: element.value, element });
  }

  return true;
}
