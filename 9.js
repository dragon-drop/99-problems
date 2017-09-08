const assert = require('assert');

const name = '9. Pack consecutive duplicates of list elements into sublists';

function pack(list) {
    const packed = [];

    list.forEach((item) => {
        const lastSet = packed[packed.length - 1];

        if (lastSet && item === lastSet[0]) {
            lastSet.push(item);
        } else {
            packed.push([item]);
        }
    });

    return packed;
}

assert.deepEqual(pack(['a', 'a', 'a', 'b', 'b', 'c', 'a', 'a', 'd']), [['a', 'a', 'a'], ['b', 'b'], ['c'], ['a', 'a'], ['d']], `${name} - 1`);

module.exports = {
    pack,
};

