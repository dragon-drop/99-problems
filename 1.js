const assert = require('assert');

const name = '1. Find the last element of a list';

function last(list) {
    return list[list.length - 1];
}

assert(last([1, 2, 3, 4]) === 4, name);
assert(last([1]) === 1, name);

module.exports = {
    last,
};
