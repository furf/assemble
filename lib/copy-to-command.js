import AddressableCommand from './addressable-command';

/**
 * Copy the value to an indexed register
 */
export default class CopyToCommand extends AddressableCommand {

  exec(state) {
    this.setRegisterValue(state, state.value);
  }
}

CopyToCommand.LABEL = 'COPYTO'
