import Command from './command';
import Pointer from './pointer';
import Reference from './reference';

/**
 * Command with bound address (or pointer)
 */
export default class AddressableCommand extends Command {

  constructor(address) {
    super();
    this.reference = new Reference(address);
  }

  getAddress(state) {

    const reference = this.reference;
    const address = reference.getAddress();

    if (reference instanceof Pointer) {
      return state.getRegisterValue(address);
    }

    return address;
  }

  getRegisterValue(state) {
    return state.getRegisterValue(this.getAddress(state));
  }

  setRegisterValue(state, value) {
    state.setRegisterValue(this.getAddress(state), value);
  }

  toString() {
    return `${this.constructor.LABEL} ${this.reference}`;
  }
}
