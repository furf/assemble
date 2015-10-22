/**
 * Program execution state
 */
export default class State {

  /**
   * @param initialState {Object}
   *          * input {Array} (required)
   *          * registers {Object} (optional)
   */
  constructor(initialState) {

    this.input = initialState.input.slice();
    this.output = [];
    this.registers = initialState.registers ?
      Object.create(initialState.registers) : {};
    this.value = null;
  }

  next() {

    const nextState = Object.create(this);

    nextState.input = this.input.slice();
    nextState.output = this.output.slice();
    nextState.registers = Object.create(this.registers);

    return nextState;
  }

  setValue(value) {
    this.value = value;
  }

  getValue(value) {
    return this.value;
  }

  setRegisterValue(address, value) {
    this.registers[address] = value;
  }

  getRegisterValue(address) {
    return this.registers[address];
  }
}
