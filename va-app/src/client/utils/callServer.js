import { loaderStart, loaderEnd } from './spinLoader';

export default function callServer(successHandlerCallback, serverFunction, params) {
  loaderStart();
  google.script.run
    .withSuccessHandler((args) => {
      const result = successHandlerCallback(args);
      loaderEnd();

      return result;
    })
    [serverFunction](params);
}
