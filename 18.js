const assert = require('assert');

const name = '18. Extract a slice from the list';

function slice(list, start, end, sliced = []) {
    list.forEach((item, index) => {
        const count = index + 1;

        if (count >= start && count <= end) {
            sliced.push(item);
        }
    });

    return sliced;
}

assert.deepEqual(slice(['a', 2, 3, 4, 'c', 6, 7, 8, 9, 10, 11, 12], 5, 9), ['c', 6, 7, 8, 9], `${name} - 1`);

module.exports = {
    slice,
};
