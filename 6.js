const assert = require('assert');

const name = '6. Find out if a list is a palindome';

function isPalindrome(list, index = list.length, itIs = true) {
    const reversed = new Array(...list).reverse();

    while(itIs && index--) {
        itIs = reversed[index] === list[index];
    }

    return itIs;
}

assert.equal(isPalindrome([1, 2, 3]), false, `${name} - 1`);
assert.equal(isPalindrome('madamimadam'), true, `${name} - 2`);
assert.equal(isPalindrome([1, 2, 4, 8, 16, 8, 4, 2, 1]), true, `${name} - 3`);

module.exports = {
    isPalindrome,
};
