import IndexCommand from './index-command';

/**
 * Copy the value from an indexed register
 */
export default class CopyFromCommand extends IndexCommand {

  exec(state) {
    state.value = this.getRegisterValue(state);
  }

  toString() {
    return CopyFromCommand.LABEL;
  }
}

CopyFromCommand.LABEL = 'COPYFROM'
