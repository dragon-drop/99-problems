const assert = require('assert');

const name = '16. Drop every nth item from a list';

function drop(list, n, dropped = []) {
    list.forEach((item, index) => {
        const count = index + 1;

        if (count % n !== 0) {
            dropped.push(item);
        }
    });

    return dropped;
}

assert.deepEqual(drop(['a', 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 3), ['a', 2, 4, 5, 7, 8, 10, 11], `${name} - 1`);

module.exports = {
    drop,
};
