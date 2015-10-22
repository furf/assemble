/**
 * Base command class
 */
export default class Command {

  toString() {
    return this.constructor.LABEL;
  }
}
