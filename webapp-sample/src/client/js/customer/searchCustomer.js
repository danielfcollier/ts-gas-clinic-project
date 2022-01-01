const searchResultsTemplate = {
  customerId: { index: 0 },
  fullName: { index: 1 },
  deleteButton: { index: 0 },
  editButton: { index: 0 },
};

const buildSearchResultsTemplate = (search) => {
  search.results.forEach((record) => {
    const row = search.template.cloneNode(true);
    Object.keys(searchResultsTemplate).forEach((key) => {
      const { index } = searchResultsTemplate[key];
      row.querySelector(`.${key}`).textContent = record[index];
    });
    search.box.appendChild(row);
  });
};

export default function loadSearchResults() {
  const searchData = JSON.parse(window.sessionStorage.getItem('searchData'));
  const search = {
    input: document.getElementById('search-input').value,
    box: document.getElementById('search-results'),
    template: document.getElementById('search-template').content,
  };

  const clearSearchResults = () => {
    search.box.innerHTML = '';
  };

  clearSearchResults();

  if (!search.input) {
    return true;
  }

  const searchResults = searchData.filter((record) => {
    const { index } = searchResultsTemplate['fullName'];
    const content = record[index].toString().toLowerCase();
    return content.includes(search.input.toLowerCase());
  });

  buildSearchResultsTemplate({ ...search, results: searchResults });
}
