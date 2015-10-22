import Command from './command';

/**
 * Shift a value from the inbox
 */
export default class InboxCommand extends Command {

  exec(state) {
    state.input = state.input.slice();
    state.value = state.input.shift();
  }
}

InboxCommand.LABEL = 'INBOX';
