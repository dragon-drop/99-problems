const assert = require('assert');

const name = '15. Replicated the elements of a list n times';

function replicate(list, times, replicated = []) {
    list.forEach((item) => {
        let count = times;

        while(count--) {
            replicated.push(item);
        }
    });

    return replicated;
}

assert.deepEqual(replicate(['a', 'b', 'c', 'c', 'd'], 3), ['a', 'a', 'a', 'b', 'b', 'b', 'c', 'c', 'c', 'c', 'c', 'c', 'd', 'd', 'd'], `${name} - 1`);

assert.deepEqual(replicate(['a', 'b', 'c', 'c', 'd'], 1), ['a', 'b', 'c', 'c', 'd'], `${name} - 1`);

module.exports = {
    replicate,
};
