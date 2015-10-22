import AddressableCommand from './addressable-command';

/**
 * Subtract the value at an indexed register from the current value
 */
export default class SubCommand extends AddressableCommand {

  exec(state) {
    state.setValue(state.getValue() - this.getRegisterValue(state));
  }
}

SubCommand.LABEL = 'SUB'
