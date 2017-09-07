const assert = require('assert');


const name = '5. Reverse a list';

function myReverse(list) {
    let reversed = [];
    list.forEach((item) => reversed.unshift(item));
    return reversed;
}

assert.deepEqual(myReverse(['a', 'b', 'c']), ['c', 'b', 'a'], `${name} - 1`);

