const searchResultsTemplate = [
  'customerId',
  'fullName',
  'email'
];

export default function loadSearchResults() {
  const searchData = JSON.parse(window.sessionStorage.getItem('searchData'));
  /* eslint-disable */
  console.log(searchData[0]);

  const search = {
    input: document.getElementById('search-input').value,
    box: document.getElementById('search-results'),
    template: document.getElementById('search-template').content,
  };

  const clearSearchResults = () => {
    search.box.innerHTML = "";
  }

  clearSearchResults();

  if (!search.input) {
    return true;
  }

  const searchResults = searchData.filter(record => {
    const index = searchResultsTemplate.indexOf('fullName');
    const content = record[index].toString().toLowerCase();
    return content.includes(search.input.toLowerCase());
  });

  searchResults.forEach(record => {
    const row = search.template.cloneNode(true);
    searchResultsTemplate.forEach((template, index) => {
      row.querySelector(`.${template}`).textContent = record[index];
    });
    search.box.appendChild(row);
  });
}
