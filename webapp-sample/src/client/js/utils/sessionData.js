function retrieveSessionData(variable) {
  return JSON.parse(window.sessionStorage.getItem(variable));
}

function storeSessionData(variable, data) {
  window.sessionStorage.setItem(variable, JSON.stringify(data));
}

export { retrieveSessionData, storeSessionData };
