import template from './template';

const rowTemplate = {
  textContent: template,
  dataset: {
    updateBookingButton: 'id',
    cancelBookingButton: 'id',
    confirmCancelBookingsButton: 'id',
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
    const positionElement = rowTemplate.textContent.filter(element => {
      const [name,] = element;
      return setName === name;
    });
    const position = positionElement.map(element => {
      const [, index] = element;
      return index;
    })[0];
    row.querySelector(`.${key}`).dataset[setName] = record[position];
  });
}

export default function build(search) {
  search.results.forEach((record) => {
    const row = buildRow(record, search);
    setTracking(record, row);
    search.box.appendChild(row);
  });
}
