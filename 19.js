const assert = require('assert');
const { split } = require('./17');

const name = '19. Rotate a list n places to the left';

function rotate(list, n, rotated = []) {
    if (n > list.length) {
        n = n % list.length;
    }

    if (n > 0) {
        splitted = split(list, n);
    } else {
        splitted = split(list, list.length + n);
    }

    rotated = [...splitted[1], ...splitted[0]];

    return rotated;
}

assert.deepEqual(rotate(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'], -2), ['g', 'h', 'a', 'b', 'c', 'd', 'e', 'f'], `${name} - 1`);

assert.deepEqual(rotate(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'], 3), ['d', 'e', 'f', 'g', 'h', 'a', 'b', 'c'], `${name} - 1`);

assert.deepEqual(rotate(['a', 'b', 'c', 'd'], 9), ['b', 'c', 'd', 'a'], `${name} - 1`);

module.exports = {
    rotate,
};
