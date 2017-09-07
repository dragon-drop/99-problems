name = '1. Find the last element of a list';

function myLast(list) {
    return list[list.length - 1];
}

assert(myLast([1, 2, 3, 4]) === 4, name);