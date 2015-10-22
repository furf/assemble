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

var result = program([5, 3, 2, 4, 1, 5], { 14: 0 })
  .label('a')
  .inbox()
  .copyto(0)
  .inbox()
  .sub(0)
  .jumpifnegative('b')
  .add(0)
  .jump('c')
  .label('b')
  .copyfrom(0)
  .label('c')
  .outbox()
  .jump('a')
  .end([5, 4, 5]);

log(result);
