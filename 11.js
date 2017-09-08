const assert = require('assert');
const { pack } = require('./9');

function encode(list) {
    return pack(list).map((list) => list.length === 1 ? list[0] : [list.length, list[0]]);
}

const name = '11. Modified run-length encoding';

assert.deepEqual(encode(['a', 'a', 'a', 'b', 'b', 'c', 'a', 'a', 'd']), [[3, 'a'], [2, 'b'], 'c', [2, 'a'], 'd'], `${name} - 1`);

module.exports = {
    encode,
};
