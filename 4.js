name = '4. Find the number of elements of a list';

function myLength(list) {
    let length = 0;
    list.forEach(() => length += 1);
    return length;
}

assert(myLength(['a', 'b', 'c']) === 3, `${name} - 1`);

