exports.debug = function() {
    let args = Array.prototype.slice.call(arguments, 0)
    console.log.apply(console, args);
};

exports.info = function() {
    let args = Array.prototype.slice.call(arguments, 0)
    console.log.apply(console, args);
};

exports.error = function () {
    let args = Array.prototype.slice.call(arguments, 0)
    console.log.apply(console, args);
};