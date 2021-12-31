export default function loadTab({ buildFunction, id, callback, params }) {
  const defaultId = 'app';

  const successHandlerCallback = (htmlString) => {
    document.getElementById(id ?? defaultId).innerHTML = htmlString;
  };

  google.script.run.withSuccessHandler(successHandlerCallback)[buildFunction]();

  if (callback) {
    callback(params);
  }
}
