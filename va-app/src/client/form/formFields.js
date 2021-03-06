function clearFormFields(schema) {
  schema.forEach((parameter) => {
    window.document.getElementById(parameter).value = '';
  });
}

function getFormFields(schema) {
  const data = {};
  schema.forEach((parameter) => {
    data[parameter] = window.document.getElementById(parameter).value;
  });

  return data;
}

function setFormFields(formFields, data, selectOptions, schema) {
  formFields.forEach((parameter, index) => {
    const value = schema ? data[schema.indexOf(parameter)] : data[index];
    const element = window.document.getElementById(parameter);
    const { tagName } = element;

    if (tagName === 'SELECT') {
      element.value = `${selectOptions[parameter].indexOf(value) + 1}`;
    } else if (tagName === 'INPUT') {
      element.value = value;
    }
  });
}

export { clearFormFields, getFormFields, setFormFields };
