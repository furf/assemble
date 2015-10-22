import IndexCommand from './index-command';

/**
 * Subtract the value at an indexed register from the current value
 */
export default class SubCommand extends IndexCommand {

  exec(state) {
    state.value = state.value - this.getRegisterValue(state);
  }

  toString() {
    return SubCommand.LABEL;
  }
}

SubCommand.LABEL = 'SUB'
