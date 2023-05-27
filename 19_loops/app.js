// for loop basics
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

for (let i = 1; i <= 6; i++) {
    console.log("Da ba dee da ba daa");
}

for (let i = 2; i <= 20; i += 2) {
    console.log(i);
}

for (let i = 25; i >= 0; i -= 5) {
    console.log(i);
}

// array loops
const animals = ["lions", "tigers", "bears"];
for (let i = 0; i < animals.length; i++) {
    console.log(i, animals[i]);
}
for (let i = animals.length - 1; i >= 0; i--) {
    console.log(i, animals[i]);
}

const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"];
for (let i = 0; i < people.length; i++) {
    console.log(people[i].toUpperCase());
}

// nested loops
for (let i = 1; i <= 10; i++) {
    console.log(`i is: ${i}`);
    for (let j = 1; j < 4; j++) {
        console.log(`     j is: ${j}`);
    }
}

const seatingChart = [
    ["Kristen", "Erik", "Namita"],
    ["Geoffrey", "Juanita", "Antonio", "Kevin"],
    ["Yuma", "Sakura", "Jack", "Erika"],
];
for (let i = 0; i < seatingChart.length; i++) {
    const row = seatingChart[i];
    console.log(`ROW #${i + 1}`);
    for (let j = 0; j < row.length; j++) {
        console.log(row[j]);
    }
}

// while loops
let count = 0;
while (count < 10) {
    count++;
    console.log(count);
}

// guess game
// let maximum = parseInt(prompt("Enter the maximum number!"));
// while (!maximum) {
//     maximum = parseInt(prompt("Enter a valid number!"));
// }

// const targetNum = Math.floor(Math.random() * maximum) + 1;

// let guess = parseInt(prompt("Enter your first guess!"));
// let attempts = 1;

// while (parseInt(guess) !== targetNum) {
//     if (guess === "q") break;
//     attempts++;
//     if (guess > targetNum) {
//         guess = prompt("Too high! Enter a new guess!");
//     } else {
//         guess = prompt("Too low! Enter a new guess!");
//     }
// }
// if (guess === "q") {
//     console.log("OK, YOU QUIT!");
// } else {
//     console.log("CONGRATS YOU WIN!");
//     console.log(`You got it! It took you ${attempts} guesses!`);
// }

const subreddits = ["cringe", "books", "chickens", "funny", "pics", "soccer"];
for (let i = 0; i < subreddits.length; i++) {
    console.log(`Visit reddit.com/r/${subreddits[i]}`);
}

for (let sub of subreddits) {
    console.log(`Visit reddit.com/r/${sub}`);
}

for (let row of seatingChart) {
    for (let student of row) {
        console.log(student);
    }
}

for (let char of "hello world") {
    console.log(char);
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let num of numbers) {
    console.log(num * num);
}

// object loops
const testScores = {
    keenan: 80,
    damon: 67,
    kim: 89,
    shawn: 91,
    marlon: 72,
    dwayne: 77,
    nadia: 83,
    elvira: 97,
    diedre: 81,
    vonnie: 60,
};
for (let person in testScores) {
    console.log(`${person} scored ${testScores[person]}`);
}
let total = 0;
let scores = Object.values(testScores);
for (let score of scores) {
    total += score;
}
console.log(total / scores.length);
