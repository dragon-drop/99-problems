const assert = require('assert');
const { isArray } = require('./methods');

const name = '12. Decode run-length encoding';

function decode(list) {
    const decoded = [];

    list.forEach((item) => {
        if (!isArray(item)) {
            decoded.push(item);
        } else {
            while(item[0]--) {
                decoded.push(item[1]);
            }
        }
    });

    return decoded;
}

assert.deepEqual(decode([[3, 'a'], [2, 'b'], 'c', [2, 'a'], 'd']), ['a', 'a', 'a', 'b', 'b', 'c', 'a', 'a', 'd'], `${name} - 1`);

module.exports = {
    decode,
};
