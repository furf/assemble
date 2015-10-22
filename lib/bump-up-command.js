import IndexCommand from './index-command';

/**
 * Increment the value at an indexed register and copy the result
 */
export default class BumpUpCommand extends IndexCommand {

  exec(state) {
    state.value = this.getRegisterValue(state) + 1;
    this.setRegisterValue(state, state.value);
  }

  toString() {
    return BumpUpCommand.LABEL;
  }
}

BumpUpCommand.LABEL = 'BUMPUP'
