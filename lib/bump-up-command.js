import AddressableCommand from './addressable-command';

/**
 * Increment the value at an indexed register and copy the result
 */
export default class BumpUpCommand extends AddressableCommand {

  exec(state) {
    state.setValue(this.getRegisterValue(state) + 1);
    this.setRegisterValue(state, state.getValue());
  }
}

BumpUpCommand.LABEL = 'BUMPUP'
