import template from './template';

const rowTemplate = {
  textContent: template,
  dataset: {
    bookButton: 'id',
    editButton: 'id',
  },
};

function buildRow(record, search, transforms = {}) {
  const row = search.template.cloneNode(true);
  rowTemplate.textContent.forEach((element) => {
    const [key, index] = element;
    if (transforms[key]) {
      row.querySelector(`.${key}`).textContent = transforms[key](record[index]);
    } else {
      row.querySelector(`.${key}`).textContent = record[index];
    }
  });

  return row;
}

function setTracking(record, row) {
  Object.keys(rowTemplate.dataset).forEach((key) => {
    const setName = rowTemplate.dataset[key];
    const index = rowTemplate.textContent.indexOf(setName);
    row.querySelector(`.${key}`).dataset[setName] = record[index];
  });
}

export default function build(search) {
  search.results.forEach((record) => {
    const row = buildRow(record, search);
    setTracking(record, row);
    search.box.appendChild(row);
  });
}
