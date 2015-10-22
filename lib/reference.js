import Pointer from './pointer';

export default class Reference {

  constructor(address) {

    if (Array.isArray(address)) {
      return new Pointer(address[0]);
    }

    this.address = address;
  }

  getAddress() {
    return this.address;
  }

  toString() {
    return this.address;
  }
}
