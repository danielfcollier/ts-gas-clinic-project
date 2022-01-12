export default function inputValidator(input) {
  const { element, placeHolder, validator, value } = input;

  const isValid = 'is-valid';
  const isInvalid = 'is-invalid';

  const clearValidation = (field) => {
    if (element.classList.contains(field)) {
      element.classList.remove(field);
    }
  };

  const addValidation = (field) => {
    element.classList.add(field);
  };

  if (value.length < placeHolder?.length) {
    clearValidation(isValid);
    clearValidation(isInvalid);
    return false;
  }

  if (validator(value)) {
    clearValidation(isInvalid);
    addValidation(isValid);
  } else {
    clearValidation(isValid);
    addValidation(isInvalid);
  }

  return true;
}
