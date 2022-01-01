import backendCall from '../functions/backend';

export default function getSearchData() {
  const storeData = (data) => {
    // eslint-disable-next-line
    console.log({ msg: 'Problem here', data });
    window.sessionStorage.setItem('searchData', JSON.stringify(data));
  };

  backendCall(storeData, 'ServerAPI.getSearchData');
}
