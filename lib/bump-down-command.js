import IndexCommand from './index-command';

/**
 * Decrement the value at an indexed register and copy the result
 */
export default class BumpDownCommand extends IndexCommand {

  exec(state) {
    state.value = this.getRegisterValue(state) - 1;
    this.setRegisterValue(state, state.value);
  }

  toString() {
    return BumpDownCommand.LABEL;
  }
}

BumpDownCommand.LABEL = 'BUMPDN'
