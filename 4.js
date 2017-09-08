const assert = require('assert');

const name = '4. Find the length of a list';

function length(list) {
    let length = 0;
    list.forEach(() => length += 1);
    return length;
}

assert(length(['a', 'b', 'c']) === 3, `${name} - 1`);

module.exports = {
    length,
};
