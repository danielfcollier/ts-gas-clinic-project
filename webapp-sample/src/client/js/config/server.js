export default function callServer(successHandlerCallback, buildFunction, params) {
  google.script.run.withSuccessHandler(successHandlerCallback)[buildFunction](params);
}
