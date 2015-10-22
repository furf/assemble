import AddressableCommand from './addressable-command';

/**
 * Copy the value from an indexed register
 */
export default class CopyFromCommand extends AddressableCommand {

  exec(state) {
    state.value = this.getRegisterValue(state);
  }
}

CopyFromCommand.LABEL = 'COPYFROM'
