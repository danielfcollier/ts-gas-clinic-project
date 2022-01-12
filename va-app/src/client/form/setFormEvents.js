import inputHandler from './inputHandler';
import submitHandler from './submitHandler';

export default function setFormEvents(form, validations) {
  form.addEventListener('input', (event) => inputHandler(event, validations));
  form.addEventListener('submit', (event) => submitHandler(event, validations));
}
