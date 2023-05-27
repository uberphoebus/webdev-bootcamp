// methods
const myMath = {
    PI: 3.14,
    square(num) {
        return num * num;
    },
    cube(num) {
        return num ** 3;
    },
};

console.log(myMath.PI);
console.log(myMath.square(2));

const square = {
    area(side) {
        return side * side;
    },
    perimeter(side) {
        return side * 4;
    },
};

// this
const cat = {
    name: "Blue Steele",
    color: "grey",
    breed: "scottish fold",
    meow() {
        console.log("THIS IS:", this);
        console.log(`${this.name} says MEOWWWW`);
    },
};
cat.meow();

const meow2 = cat.meow;
meow2(); // undefined says MEOWWWW

function scream() {
    console.log("AAAHHHHHHHH");
}

const hen = {
    name: "Helen",
    eggCount: 0,
    layAnEgg() {
        this.eggCount++;
        return "EGG";
    },
};
