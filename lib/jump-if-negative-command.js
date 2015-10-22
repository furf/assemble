import JumpCommand from './jump-command';

/**
 * 
 */
export default class JumpIfNegativeCommand extends JumpCommand {

  evaluate(state) {
    return state.value < 0;
  }

  toString() {
    return JumpIfNegativeCommand.LABEL;
  }
}

JumpIfNegativeCommand.LABEL = 'JUMPN';
