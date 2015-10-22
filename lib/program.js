import State from './state';
import Command from './command';
import InboxCommand from './inbox-command';
import OutboxCommand from './outbox-command';
import CopyToCommand from './copy-to-command';
import CopyFromCommand from './copy-from-command';
import AddCommand from './add-command';
import SubCommand from './sub-command';
import JumpCommand from './jump-command';
import JumpIfZeroCommand from './jump-if-zero-command';
import JumpIfNegativeCommand from './jump-if-negative-command';

/**
 * 
 */
export default class Program {

  constructor(input, registers) {
    this.state = new State(input, registers);
    this.commands = [];
    this.labels = {};
  }

  addCommand(command) {
    this.commands.push(command);
    return this;
  }

  inbox(label) {
    return this.addCommand(new InboxCommand());
  }

  outbox(label) {
    return this.addCommand(new OutboxCommand());
  }

  copyto(index) {
    return this.addCommand(new CopyToCommand(index));
  }

  copyfrom(index) {
    return this.addCommand(new CopyFromCommand(index));
  }

  add(index) {
    return this.addCommand(new AddCommand(index));
  }

  sub(index) {
    return this.addCommand(new SubCommand(index));
  }

  bumpup(index) {
    return this.addCommand(new BumpUpCommand(index));
  }

  bumpdown(index) {
    return this.addCommand(new BumpDownCommand(index));
  }

  label(label) {
    this.labels[label] = this.commands.length;
    return this;
  }

  jump(label) {
    return this.addCommand(new JumpCommand(label));
  }

  jumpifzero(label) {
    return this.addCommand(new JumpIfZeroCommand(label));
  }

  jumpifnegative(label) {
    return this.addCommand(new JumpIfNegativeCommand(label));
  }


  end(values) {

    let i = 0;
    const n = this.commands.length;
    let command;
    let state = this.state;
    let label;

    // log(state);

    while (i < n) {

      command = this.commands[i];

      // log(command.toString());

      if (command instanceof JumpCommand) {

        label = command.exec(state);

        i = label ? this.labels[label] : i + 1;

        // log(i)

      } else {
        state = Object.create(state);
        command.exec(state);
        // state = command.execute(state);
        i++;

        // log(state);
      }

      if (command instanceof OutboxCommand && !state.input.length) {
        i = n;
      }

    }

    // cheating teh array eval for now
    return state.output.join('-') === values.join('-');
  }
}
