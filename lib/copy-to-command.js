import IndexCommand from './index-command';

/**
 * Copy the value to an indexed register
 */
export default class CopyToCommand extends IndexCommand {

  constructor(input) {
    super(input);
  }


  exec(state) {
    this.setRegisterValue(state, state.value);
  }

  toString() {
    return CopyToCommand.LABEL;
  }
}

CopyToCommand.LABEL = 'COPYTO'
