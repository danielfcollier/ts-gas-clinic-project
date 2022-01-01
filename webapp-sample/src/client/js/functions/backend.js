export default function backendCall(successHandlerCallback, buildFunction) {
  // eslint-disable-next-line
  console.log({ buildFunction, successHandlerCallback });
  google.script.run.withSuccessHandler(successHandlerCallback)[buildFunction]();
}
