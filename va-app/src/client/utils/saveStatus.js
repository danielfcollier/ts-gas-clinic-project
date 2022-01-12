export default function saveStatus(type) {
  if (type === 'start') {
    window.document.getElementById('save-success-alert').classList.add('invisible');
  }

  if (type === 'success') {
    window.document.getElementById('save-success-alert').classList.remove('invisible');
    return true;
  }
}
