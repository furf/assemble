import IndexCommand from './index-command';

/**
 * Add the value at an indexed register from the current value
 */
export default class AddCommand extends IndexCommand {

  exec(state) {
    state.value = state.value + this.getRegisterValue(state);
  }

  toString() {
    return AddCommand.LABEL;
  }
}

AddCommand.LABEL = 'ADD'
