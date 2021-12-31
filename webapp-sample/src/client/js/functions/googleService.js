export default function googleService(successHandlerCallback, buildFunction) {
  google.script.run.withSuccessHandler(successHandlerCallback)[buildFunction]();
}
