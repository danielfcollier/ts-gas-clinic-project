function loaderStart() {
  window.document.getElementById('loading').classList.remove('invisible');
}

function loaderEnd() {
  window.document.getElementById('loading').classList.add('invisible');
}

export { loaderStart, loaderEnd };
