function loadingStart() {
  document.getElementById('loading').classList.remove('invisible');
}

function loadingEnd() {
  document.getElementById('loading').classList.add('invisible');
}

export { loadingStart, loadingEnd };
