export default function callServer(successHandlerCallback, buildFunction) {
  google.script.run.withSuccessHandler(successHandlerCallback)[buildFunction]();
}
