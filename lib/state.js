/**
 * Program execution state
 */
export default class State {

  constructor(input, registers) {
    this.input = input.slice();
    this.output = [];
    this.registers = Object.create(registers || {});
    this.value = null;
  }

  clone() {
    const state = Object.create(this);
    state.input = state.input.slice();
    state.output = state.output.slice();
    state.registers = Object.create(state.registers);
    return state;
  }
}
