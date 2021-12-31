import googleService from './googleService';

export default function getSearchData() {
  googleService((data) => {
    window.sessionStorage.setItem('searchData', JSON.stringify(data));
  }, 'getSearchDataAPI');
}
