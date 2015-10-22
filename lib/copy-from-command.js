import AddressableCommand from './addressable-command';

/**
 * Copy the value from an indexed register
 */
export default class CopyFromCommand extends AddressableCommand {

  exec(state) {
    state.setValue(this.getRegisterValue(state));
  }
}

CopyFromCommand.LABEL = 'COPYFROM'
