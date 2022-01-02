import { loadingStart, loadingEnd } from './loading';

export default function callServer(successHandlerCallback, serverFunction, params) {
  loadingStart();
  google.script.run
    .withSuccessHandler((args) => {
      const result = successHandlerCallback(args);
      loadingEnd();
      return result;
    })
    [serverFunction](params);
}
