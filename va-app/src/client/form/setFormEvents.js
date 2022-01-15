import inputHandler from './inputHandler';
import submitHandler from './submitHandler';

export default function setFormEvents(validations, handlers) {
  const form = window.document.getElementById('needs-validation');
  form.addEventListener('input', (event) => inputHandler(event, validations));
  form.addEventListener('submit', (event) => submitHandler(event, validations, handlers));
}
