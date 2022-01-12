function loadingStart() {
  window.document.getElementById('loading').classList.remove('invisible');
}

function loadingEnd() {
  window.document.getElementById('loading').classList.add('invisible');
}

export { loadingStart, loadingEnd };
