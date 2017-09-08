function isArray(item) {
    return Object.prototype.toString.call(item) === '[object Array]';
}

module.exports = {
    isArray,
};
