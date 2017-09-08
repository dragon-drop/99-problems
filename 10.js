const assert = require('assert');
const { pack } = require('./9');

const name = '10. Run-length encoding';

function encode(list) {
    const packedList = pack(list);

    const encoded = packedList.map((list) => {
        return [list.length, list[0]];
    });

    return encoded;
}

assert.deepEqual(encode(['a', 'a', 'a', 'b', 'b', 'c', 'a', 'a', 'd']), [[3, 'a'], [2, 'b'], [1, 'c'], [2, 'a'], [1, 'd']], `${name} - 1`);

module.exports = {
    encode,
};
