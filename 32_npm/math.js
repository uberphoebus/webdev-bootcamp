const PI = 3.14;
const add = (a, b) => a + b;
const square = (a) => a * a;

// module.exports.PI = PI;
// module.exports.add = add;
// module.exports.square = square;

const math = {
    PI: PI,
    add: add,
    square: square,
};

module.exports = math;
