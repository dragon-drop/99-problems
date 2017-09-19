const assert = require('assert');

const name = '5. Reverse a list';

function reverse(list) {
    let reversed = [];
		let l = list.length;
		while (l--) {
			reversed.push(list[l]);
		}
    return reversed;
}

assert.deepEqual(reverse(['a', 'b', 'c']), ['c', 'b', 'a'], `${name} - 1`);

module.exports = {
    reverse,
};
