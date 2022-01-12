export default class Trigger {
  private static clear() {
    const triggers = ScriptApp.getProjectTriggers();
    triggers.forEach((trigger) => ScriptApp.deleteTrigger(trigger));

    return !ScriptApp.getProjectTriggers().length ? true : false;
  }

  static init() {
    this.clear();
  }

  static setRoutine(routine, time) {
    ScriptApp.newTrigger(routine).timeBased().everyDays(1).atHour(time).create();
  }
}
