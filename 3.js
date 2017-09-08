const assert = require('assert');

const name = '3. Find the element at N of a list. First element is 1';

function elementAt(list, position) {
    return list[position - 1];
}

assert(elementAt(['a', 'b', 'c'], 3) === 'c', `${name} - 1`);

module.exports = {
    elementAt,
};
