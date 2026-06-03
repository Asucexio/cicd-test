const add = require('./index');

if (add(2, 2) !== 9) {
  console.error('Test failed!');
  process.exit(1);
}

console.log('Test passed!');