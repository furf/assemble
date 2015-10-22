import Command from './command';

/**
 * Command with bound address (or pointer)
 */
export default class AddressableCommand extends Command {

  constructor(address) {
    super();
    this.address = address;
  }

  getAddress(state) {
    const address = this.address;
    if (Array.isArray(address)) {
      return super.getRegisterValue(state, address[0]);
    }
    return address;
  }

  getRegisterValue(state) {
    return super.getRegisterValue(state, this.getAddress(state));
  }

  setRegisterValue(state, value) {
    super.setRegisterValue(state, this.getAddress(state), value);
  }

  toString() {
    return `${this.constructor.LABEL} ${this.address}`;
  }
}
