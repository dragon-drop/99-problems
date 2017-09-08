const assert = require('assert');
const { isArray } = require('./methods');

const name = '7. Flatten a nested list structure';

function flatten(list, flattened = []) {
    list.forEach((item) => {
        if (isArray(item)) {
            flatten(item, flattened);
        } else {
            flattened.push(item);
        }
    });

    return flattened;
}

assert.deepEqual(flatten(['a', ['b', ['c', 'd'], 'e']]), ['a', 'b', 'c', 'd', 'e'], `${name} - 1`);

module.exports = {
    flatten,
};
