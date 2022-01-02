import events from './events';
import { loadSearchTab } from './tabs';

function main() {
  window.document.addEventListener('DOMContentLoaded', loadSearchTab);

  events.forEach((event) => {
    window.document.getElementById(event.id).addEventListener(event.type, event.callback);
  });
}

main();
