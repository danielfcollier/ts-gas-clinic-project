export default function getFormData(form) {
  const { elements } = form;
  const formData = {};

  for (let index = 0; index < elements.length; index++) {
    const element = elements[index];
    const { id, value, tagName } = element;

    if (tagName === 'SELECT') {
      formData[id] = element.options[value - 1].text;
    } else if (tagName === 'INPUT') {
      formData[id] = value;
    }
  }

  return formData;
}
