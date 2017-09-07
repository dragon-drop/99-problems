const assert = require('assert');

const name = '7. Flatten a nested list structure';

function isArray(item) {
    return Object.prototype.toString.call(item) === '[object Array]';
}

function myFlatten(list, flattened = []) {
    list.forEach((item) => {
        if (isArray(item)) {
            myFlatten(item, flattened);
        } else {
            flattened.push(item);
        }
    });

    return flattened;
}

assert.deepEqual(myFlatten(['a', ['b', ['c', 'd'], 'e']]), ['a', 'b', 'c', 'd', 'e'], `${name} - 1`);
