name = '2. Find the last but 1 element of a list';

function myButLast(list) {
    if (list.length < 2) return 'Not long enough';
    return list[list.length - 2];
}

assert(myButLast([1, 2, 3, 4]) === 3, `${name} - 1`);
assert(myButLast([1]) === 'Not long enough', `${name} - 2`);

