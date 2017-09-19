const assert = require('assert');

const name = '5. Reverse a list';

// reverse :: [a] -> [a]
// Not fp, but I like it
function reverse(list) {
    let reversed = [];
    let l = list.length;
    while(l--) {
      reversed.push(list[l]);
    }
    return reversed;
}

console.log(reverse(['a','b','c']))

assert.deepEqual(reverse(['a', 'b', 'c']), ['c', 'b', 'a'], `${name} - 1`);

module.exports = {
    reverse,
};
