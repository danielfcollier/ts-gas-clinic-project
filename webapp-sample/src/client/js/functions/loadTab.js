import backendCall from './backend';

export default function loadTab({ buildFunction, id, callback, params }) {
  const defaultId = 'app';

  const successHandlerCallback = (htmlString) => {
    document.getElementById(id ?? defaultId).innerHTML = htmlString;
  };

  backendCall(successHandlerCallback, buildFunction);

  if (callback) {
    callback(params);
  }
}
