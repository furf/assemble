import Command from './command';

/**
 * Push a value to the outbox
 */
export default class OutboxCommand extends Command {

  exec(state) {
    state.output = state.output.concat(state.getValue());
  }
}

OutboxCommand.LABEL = 'OUTBOX';
