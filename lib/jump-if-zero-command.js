import JumpCommand from './jump-command';

/**
 * 
 */
export default class JumpIfZeroCommand extends JumpCommand {

  evaluate(state) {
    return state.value === 0;
  }

  toString() {
    return JumpIfZeroCommand.LABEL;
  }
}

JumpIfZeroCommand.LABEL = 'JUMPZ';
