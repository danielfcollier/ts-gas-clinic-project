import callServer from './callServer';

export default function loadTab({ serverFunction, id, callback, params }) {
  const defaultId = 'app';

  const handleCallback = () => {
    if (callback) {
      callback(params);
    }
  };

  const successHandlerCallback = (htmlString) => {
    window.document.getElementById(id ?? defaultId).innerHTML = htmlString;
    handleCallback();
  };

  callServer(successHandlerCallback, serverFunction);
}
