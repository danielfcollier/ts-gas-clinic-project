export default function checkFormValidation(form, validations) {
  const { elements } = form;

  for (let index = 0; index < elements.length; index++) {
    const element = elements[index];
    const { id } = element;

    if (validations[id]) {
      const isFormInvalid = !element.classList.contains('is-valid');

      if (isFormInvalid) {
        element.classList.add('is-invalid');
        return false;
      }
    }
  }

  return true;
}
