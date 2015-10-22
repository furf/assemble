require('babel/register');
const program = require('./lib/index');
const log = require('./lib/utils').log;

// -- HUMAN RESOURCE MACHINE PROGRAM --

// a:
//     INBOX
//     COPYTO   0
//     INBOX
//     SUB      0
//     JUMPN    b
//     ADD      0
//     JUMP     c
// b:
//     COPYFROM 0
// c:
//     OUTBOX
//     JUMP     a

// const result = program([5, 3, 2, 4, 1, 5], { 14: 0 })
//   .label('a')
//   .inbox()
//   .copyto(0)
//   .inbox()
//   .sub(0)
//   .jumpifnegative('b')
//   .add(0)
//   .jump('c')
//   .label('b')
//   .copyfrom(0)
//   .label('c')
//   .outbox()
//   .jump('a')
//   .end([5, 4, 5]);

// log(result);


// Not working yet
const multiplication = program([2, 3, 1, 5, 7, 0, 9, 3], { 4: 0 })

  .label('init')
  .inbox()
  .copyto(0)
  .inbox()
  .copyto(1)
  .copyfrom(4)
  .copyto(3)

  .label('increment')
  .copyfrom(0)
  .jumpifzero('ship')

  .copyfrom(3)
  .add(1)
  .copyto(3)
  .bumpdown(0)
  .jump('increment')

  .label('ship')
  .copyfrom(1)
  .outbox()
  .jump('init')

  .end([6, 5, 0, 27]);

console.log(multiplication);



