//String.prototype is a "template object" for every single string.
//We could go crazy and add our own method called yell...

String.prototype.yell = function () {
    return `${this.toUpperCase()}!!!`;
};

console.log("i love you".yell());

Array.prototype.pop = function () {
    return "Sorry I want that element, I will never pop it off!";
};
console.log([1, 2, 3].pop());
