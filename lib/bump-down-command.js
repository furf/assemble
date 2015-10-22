import AddressableCommand from './addressable-command';

/**
 * Decrement the value at an indexed register and copy the result
 */
export default class BumpDownCommand extends AddressableCommand {

  exec(state) {
    state.value = this.getRegisterValue(state) - 1;
    this.setRegisterValue(state, state.value);
  }
}

BumpDownCommand.LABEL = 'BUMPDN'
