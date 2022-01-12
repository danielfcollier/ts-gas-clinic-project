export default function getTemplate(schema, params) {
  const template = params.map((element) => [element, schema.indexOf(element)]);
  return template;
}
