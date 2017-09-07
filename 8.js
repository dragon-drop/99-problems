const assert = require('assert');

const name = '8. Eliminate consecutive duplicates of list elements';

function compress(list) {
    const compressed = [];

    list.forEach((item) => {
        if (item !== compressed[compressed.length - 1]) {
            compressed.push(item);
        }
    });

    return compressed;
}

assert.deepEqual(compress(['a', 'a', 'a', 'b', 'b', 'c', 'a', 'a', 'd']), ['a', 'b', 'c', 'a', 'd'], `${name} - 1`);
