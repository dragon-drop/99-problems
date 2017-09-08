const assert = require('assert');

const name = '2. Find the penultimate element of a list';

function penultimate(list) {
    if (list.length < 2) return 'Not long enough';
    return list[list.length - 2];
}

assert(penultimate([1, 2, 3, 4]) === 3, `${name} - 1`);
assert(penultimate([1]) === 'Not long enough', `${name} - 2`);

module.exports = {
    penultimate,
};
