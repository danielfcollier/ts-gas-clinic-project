import events from './events';
import { buildTabBooking } from './tabs';

function main() {
  window.document.addEventListener('DOMContentLoaded', buildTabBooking);

  events.forEach((event) => {
    window.document.getElementById(event.id).addEventListener(event.type, event.callback);
  });
}

main();
