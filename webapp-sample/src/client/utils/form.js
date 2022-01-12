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

function setFormFields(schema, data) {
  schema.forEach((parameter, index) => {
    window.document.getElementById(parameter).value = data[index];
  });
}

export { clearFormFields, getFormFields, setFormFields };
