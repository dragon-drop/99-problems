name = '3. Find the kth element of a list. First element is 1';

function elementAt(list, position) {
    return list[position - 1];
}

assert(elementAt(['a', 'b', 'c'], 3) === 'c', `${name} - 1`);

