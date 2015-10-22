import Command from './command';

/**
 * Command with bound index (or pointer)
 */
export default class IndexCommand extends Command {

  constructor(index) {
    super();
    this.index = index;
  }

  getIndex(state) {
    const index = this.index;
    if (Array.isArray(index)) {
      return super.getRegisterValue(state, index[0]);
    }
    return index;
  }

  getRegisterValue(state) {
    return super.getRegisterValue(state, this.getIndex(state));
  }

  setRegisterValue(state, value) {
    super.setRegisterValue(state, this.getIndex(state), value);
  }
}
