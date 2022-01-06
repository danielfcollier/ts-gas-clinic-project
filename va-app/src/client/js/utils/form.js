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

function setFormFields(formFields, data, schema) {
  formFields.forEach((parameter, index) => {
    const value = schema ? data[schema.indexOf(parameter)] : data[index];
    window.document.getElementById(parameter).value = value;
  });
}

export { clearFormFields, getFormFields, setFormFields };
