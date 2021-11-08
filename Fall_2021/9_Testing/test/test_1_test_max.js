const assert = require('assert');

describe('Math', () => {
 describe('.max', () => {
   it('returnerer agrumentet med den højest værdi', () => {
     const minimum = 1;
     const median = 2;
     const maximum = 3;

     const result = Math.max(median, minimum, maximum);

     assert.ok(result === maximum);
   });
   it('returnerer - Infinity når ingen argumenter er givet', () => {
     const negInfinity = -Infinity;

     const result = Math.max();

     assert.ok(result === negInfinity);
   });
 });
});

