import template from './template';

const rowTemplate = {
  textContent: template,
  dataset: {
    deleteButton: 'customerId',
    editButton: 'customerId',
  },
};

function buildRow(record, search) {
  const row = search.template.cloneNode(true);
  rowTemplate.textContent.forEach((key, index) => {
    row.querySelector(`.${key}`).textContent = record[index];
  });

  return row;
}

function setTracking(record, row) {
  Object.keys(rowTemplate.dataset).forEach((key) => {
    const setname = rowTemplate.dataset[key];
    const index = rowTemplate.textContent.indexOf(setname);
    row.querySelector(`.${key}`).dataset[setname] = record[index];
  });
}

export default function build(search) {
  search.results.forEach((record) => {
    const row = buildRow(record, search);
    setTracking(record, row);
    search.box.appendChild(row);
  });
}
