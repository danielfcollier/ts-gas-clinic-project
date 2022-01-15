import inputValidator from './inputValidator';

export default function inputHandler(event, validations) {
  const { id } = event.target;
  const element = window.document.getElementById(id);

  const hasPlaceHolder = !!validations[id]?.placeHolder;
  if (hasPlaceHolder) {
    if (element.value.length >= validations[id].placeHolder.length) {
      const maxValue = element.value.slice(0, validations[id].placeHolder.length);
      element.value = maxValue;
    }
  }

  const hasMask = !!validations[id]?.mask;
  if (hasMask) {
    element.value = validations[id].mask(element.value);
  }

  const hasValidator = !!validations[id]?.validator;
  if (hasValidator) {
    inputValidator({ ...validations[id], element });
  }

  return true;
}
