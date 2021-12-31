import loadSearchResults from './search';

const events = [
  { selector: '#search-input', callback: loadSearchResults },
];

export default function inputEventHandler(e) {
  for (const event of events) {
    if (e.target.matches(event.selector)) {
      event.callback();
      break;
    }
  };
}
