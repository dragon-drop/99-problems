const assert = require('assert');

const name = '17. Split a list into two parts, first part given length';

function split(list, n, splitted = []) {
    const first = [];
    const last = [];

    list.forEach((item, index) => {
        if (index < n) {
            first.push(item);
        } else {
            last.push(item);
        }
    });

    splitted.push(first);
    splitted.push(last);

    return splitted;
}

assert.deepEqual(split(['a', 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 3), [['a', 2, 3], [4, 5, 6, 7, 8, 9, 10, 11, 12]], `${name} - 1`);

module.exports = {
    split,
};
