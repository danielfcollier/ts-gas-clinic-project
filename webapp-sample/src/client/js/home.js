import events from './config/events';

function mainHome() {
  events.forEach((event) => {
    document.getElementById(event.id).addEventListener(event.type, event.callback);
  });
}

mainHome();
