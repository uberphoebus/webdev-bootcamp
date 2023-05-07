let days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
];
console.log(days);
console.log(days.length);
console.log(days[0]);

// Array Methods

// push
let movieLine = ["tom", "nancy"];
movieLine.push("oliver");
console.log(movieLine);
movieLine.push("eva");
console.log(movieLine);
movieLine.push("harry", "hermione");
console.log(movieLine);

// pop
let person = movieLine.pop();
console.log(person);
console.log(movieLine);

// shift
movieLine.shift();
console.log(movieLine);
let nextPatron = movieLine.shift();
console.log(nextPatron);
console.log(movieLine);

// unshift
movieLine.push("jerry", "deniz", "kevin", "carly");
movieLine.unshift("VIP");
console.log(movieLine);

// concat
let cats = ["blue", "kitty"];
let dogs = ["rusty", "wyatt"];
let comboParty = dogs.concat(cats);
console.log(comboParty);

// includes
console.log(comboParty.includes("blue"));
console.log(comboParty.includes("Blue"));

// indexOf
console.log(comboParty.indexOf("blue"));
console.log(comboParty.indexOf("Blue"));

// reverse
console.log(comboParty.reverse());
console.log(comboParty);

// slice
let colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
console.log(colors.slice(5));
console.log(colors.slice(2, 4));
console.log(colors.slice(-2));

// splice
let colors2 = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
colors2.splice(5, 1, "purple");
console.log(colors2);
colors2.splice(1, 0, "red-orange");
console.log(colors2);
colors2.splice(3, 0, "yellow-green", "forestgreen");
console.log(colors2);

// sort
let scores = [1, 70, 100, 2500, 9, -12, 0, 34];
console.log(scores.sort());


// compare reference
console.log([1, 2, 3] === [1, 2, 3]); // false

let nums = [1, 2, 3];
let numsCopy = nums;
nums.push(4);
console.log(nums);
console.log(numsCopy);
numsCopy.pop();
console.log(nums);
console.log(numsCopy);
console.log(nums === numsCopy); // true


// array + const
const nums2 = [1, 2, 3];
nums2.push(4);
console.log(nums2);


// nested array
const gameBoard = [
    ["O", null, "X"],
    [null, "X", "O"],
    ["X", "O", null],
]
console.log(gameBoard);
console.log(gameBoard[1][1]);