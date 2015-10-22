import JumpCommand from './jump-command';

/**
 *
 */
export default class JumpIfNegativeCommand extends JumpCommand {

  evaluate(state) {
    return state.value < 0;
  }
}

JumpIfNegativeCommand.LABEL = 'JUMPN';
