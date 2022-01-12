export default function displayCancelConfirmation(e) {
  if (e.target.dataset.buttonState === 'delete') {
    e.target.previousElementSibling.classList.remove('d-none');
    e.target.textContent = 'Cancelar';
    e.target.dataset.buttonState = 'cancel';
  } else {
    e.target.previousElementSibling.classList.add('d-none');
    e.target.textContent = 'Desmarcar';
    e.target.dataset.buttonState = 'delete';
  }
}
