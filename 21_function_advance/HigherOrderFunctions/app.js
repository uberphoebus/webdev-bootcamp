// higher order functions
function callTwice(func) {
    func();
    func();
}

function rollDie() {
    const roll = Math.floor(Math.random() * 6) + 1;
    console.log(roll);
}

function callTenTimes(f) {
    for (let i = 0; i < 10; i++) {
        f();
    }
}

callTwice(rollDie);
callTenTimes(rollDie);

function makeMysteryFunc() {
    const rand = Math.random();
    if (rand > 0.5) {
        return function () {
            console.log("CONGRATS, I AM A GOOD FUNCTION!");
            console.log("YOU WIN A MILLION DOLLARS!!");
        };
    } else {
        return function () {
            console.log("YOU HAVE BEEN INFECTED BY A COMPUTER VIRUS!");
            console.log("STOP TRYING TO CLOSE THIS WINDOW!");
            console.log("STOP TRYING TO CLOSE THIS WINDOW!");
            console.log("STOP TRYING TO CLOSE THIS WINDOW!");
            console.log("STOP TRYING TO CLOSE THIS WINDOW!");
            console.log("STOP TRYING TO CLOSE THIS WINDOW!");
        };
    }
}
const mystery = makeMysteryFunc();

// factory function
function makeBetweenFunc(min, max) {
    return function (num) {
        return num >= min && num <= max;
    };
}

let isChild = makeBetweenFunc(0, 18);
console.log(isChild(10));
