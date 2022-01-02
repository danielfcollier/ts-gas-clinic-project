function retrieveSessionData(variable) {
  return JSON.parse(window.sessionStorage.getItem(variable));
}

function storeSessionData(variable, data) {
  window.sessionStorage.setItem(variable, JSON.stringify(data));
}

function getSessionDataById(variable, id) {
  const data = retrieveSessionData(variable);
  const bulk = new Map();
  data.forEach((element) => {
    bulk.set(`${element[0]}`, element);
  });
  return bulk.get(id);
}

function removeSessionDataById(variable, id) {
  const data = retrieveSessionData(variable);
  const bulk = new Map();
  data.forEach((element) => {
    bulk.set(`${element[0]}`, element);
  });
  bulk.delete(id);
  const newData = Array.from(bulk.values());
  storeSessionData(variable, newData);
}

export { getSessionDataById, removeSessionDataById, retrieveSessionData, storeSessionData };
