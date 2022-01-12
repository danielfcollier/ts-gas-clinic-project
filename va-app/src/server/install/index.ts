import { TimerOptions } from '../../../config/index';
import Trigger from '../library/Trigger';

function install() {
  Trigger.init();
  Trigger.setRoutine('logging', TimerOptions.morning);
}

export default install;
