// ==========================================
// AN OLDER WAY OF ADDING DEFAULT PARAM VALUE
// ==========================================

function rollDie(numSides) {
    if (numSides === undefined) {
        numSides = 6;
    }
    return Math.floor(Math.random() * numSides) + 1;
}
console.log(rollDie(6)); // 1-6
console.log(rollDie()); // 1-6

// ============
// THE NEW WAY!
// ============

function rollDie2(numSides = 6) {
    return Math.floor(Math.random() * numSides) + 1;
}
console.log(rollDie2(6)); // 1-6
console.log(rollDie2()); // 1-6

function greet(person, msg = "Hey there", punc = "!") {
    console.log(`${msg}, ${person}${punc}`);
}
greet("Viggo");
greet("Viggo", "Hello", "!!!");
