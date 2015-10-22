import AddressableCommand from './addressable-command';

/**
 * Add the value at an indexed register from the current value
 */
export default class AddCommand extends AddressableCommand {

  exec(state) {
    state.setValue(state.getValue() + this.getRegisterValue(state));
  }
}

AddCommand.LABEL = 'ADD'
