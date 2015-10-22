/**
 * Base command class
 */
export default class Command {

  setRegisterValue(state, index, value) {
    state.registers[index] = value;
  }

  getRegisterValue(state, index) {
    return state.registers[index];
  }

  toString() {
    return this.constructor.LABEL;
  }
}
