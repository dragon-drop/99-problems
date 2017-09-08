const assert = require('assert');

const name = '14. Duplicate the elements of a list';

function duplicate(list, duplicated = []) {
    list.forEach((item) => duplicated.push(...[item, item]));

    return duplicated;
}

assert.deepEqual(duplicate(['a', 'b', 'c', 'c', 'd']), ['a', 'a', 'b', 'b', 'c', 'c', 'c', 'c', 'd', 'd'], `${name} - 1`);

module.exports = {
    duplicate,
};
