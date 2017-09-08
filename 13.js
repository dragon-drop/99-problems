const assert = require('assert');

const name = '13. Run-length encoding direct';

function pushToEncoded(encoded, letter, count) {
    if (letter !== '') {
        if (count === 1) {
            encoded.push(letter);
        } else {
            encoded.push([count, letter]);
        }
    }
}

function encode(list) {
    const encoded = [];
    let letter = '';
    let count = 1;

    list.forEach((item) => {
        if (item === letter) {
            count += 1;
        } else {
            pushToEncoded(encoded, letter, count);

            letter = item;
            count = 1;
        }
    });

    pushToEncoded(encoded, letter, count);

    return encoded;
}

assert.deepEqual(encode(['a', 'a', 'a', 'b', 'b', 'c', 'a', 'a', 'd']), [[3, 'a'], [2, 'b'], 'c', [2, 'a'], 'd'], `${name} - 1`);
assert.deepEqual(encode(['a', 'a', 'a', 'b', 'b', 'c', 'a', 'a', 'd', 'd']), [[3, 'a'], [2, 'b'], 'c', [2, 'a'], [2, 'd']], `${name} - 1`);

module.exports = {
    encode,
};
