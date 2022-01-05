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

function setFormFields(formFields, schema, data) {
  formFields.forEach((parameter) => {
    // eslint-disable-next-line
    console.log({ parameter, index: schema.indexOf(parameter), data })
    window.document.getElementById(parameter).value = data[schema.indexOf(parameter)];
  });
}

export { clearFormFields, getFormFields, setFormFields };
