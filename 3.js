const assert = require('assert');
const R = require('ramda');

const name = '3. Find the element at N of a list. First element is 1';

// elementAt :: Int -> [a] -> a
const elementAt = R.curry((position, list) => {
  return list[position - 1];
});

// manual currying version
const elementAtB = position => list => (
  list[position - 1]
)

// const elementAt3 = elementAt(3);
// console.log({elementAt3})
// console.log(elementAt3(['a', 'b', 'c']))
assert(elementAtB (3) (['a', 'b', 'c']) === 'c', `${name} - 1`);

module.exports = {
    elementAt,
};
