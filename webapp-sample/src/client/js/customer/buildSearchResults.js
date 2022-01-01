import { retrieveSessionData } from '../utils/sessionData';

const resultTemplate = {
  textContent: {
    customerId: {
      index: 0,
    },
    fullName: {
      index: 1,
    },
    email: {
      index: 2,
    },
  },
  dataset: {
    deleteButton: {
      setname: 'customerId',
      index: 0,
    },
    editButton: {
      setname: 'customerId',
      index: 0,
    },
  },
};

const buildResultTemplate = (search) => {
  search.results.forEach((record) => {
    const row = search.template.cloneNode(true);
    Object.keys(resultTemplate.textContent).forEach((key) => {
      const { index } = resultTemplate.textContent[key];
      row.querySelector(`.${key}`).textContent = record[index];
    });
    Object.keys(resultTemplate.dataset).forEach((key) => {
      const { index, setname } = resultTemplate.dataset[key];
      row.querySelector(`.${key}`).dataset[setname] = record[index];
    });
    search.box.appendChild(row);
  });
};

export default function loadSearchResults() {
  const searchData = retrieveSessionData('searchData');
  const search = {
    input: document.getElementById('search-input').value,
    box: document.getElementById('search-results'),
    template: document.getElementById('search-template').content,
  };

  const clearResults = () => {
    search.box.innerHTML = '';
  };

  clearResults();

  if (!search.input) {
    return true;
  }

  const searchResults = searchData.filter((record) => {
    const searchField = 'fullName';
    const { index } = resultTemplate.textContent[searchField];
    const content = record[index].toString().toLowerCase();
    return content.includes(search.input.toLowerCase());
  });

  buildResultTemplate({ ...search, results: searchResults });
}
