import JumpCommand from './jump-command';

/**
 *
 */
export default class JumpIfZeroCommand extends JumpCommand {

  evaluate(state) {
    return state.value === 0;
  }
}

JumpIfZeroCommand.LABEL = 'JUMPZ';
