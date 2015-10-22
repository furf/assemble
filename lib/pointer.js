import Reference from './reference';

export default class Pointer extends Reference {

  toString() {
    return `[${this.address}]`;
  }
}
