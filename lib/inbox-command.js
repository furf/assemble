import Command from './command';

/**
 * Shift a value from the inbox
 */
export default class InboxCommand extends Command {

  exec(state) {
    state.input = state.input.slice();
    state.setValue(state.input.shift());
  }
}

InboxCommand.LABEL = 'INBOX';
