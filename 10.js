const assert = require('assert');

const name = '10. Run-length encoding';

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

function encode(list) {
    const packedList = pack(list);

    const encoded = packedList.map((list) => {
        return [list.length, list[0]];
    });

    return encoded;
}

assert.deepEqual(encode(['a', 'a', 'a', 'b', 'b', 'c', 'a', 'a', 'd']), [[3, 'a'], [2, 'b'], [1, 'c'], [2, 'a'], [1, 'd']], `${name} - 1`);
