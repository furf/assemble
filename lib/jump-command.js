/**
 *
 */
export default class JumpCommand {

  constructor(label) {
    this.label = label;
  }

  evaluate(state) {
    return true;
  }

  exec(state) {
    return this.evaluate(state) ? this.label : null;
  }

  toString() {
    return `${this.constructor.LABEL} '${this.label}'`;
  }
}

JumpCommand.LABEL = 'JUMP';
