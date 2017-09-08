const assert = require('assert');

const name = '20. Returns a list without the nth item';

function without(list, n, removedAt = []) {
    list.forEach((item, index) => {
        if (index + 1 !== n) {
            removedAt.push(item);
        }
    });

    return removedAt;
}

assert.deepEqual(without(['a', 'b', 'c', 'd'], 2), ['a', 'c', 'd'], `${name} - 1`);

module.exports = {
    without,
};
