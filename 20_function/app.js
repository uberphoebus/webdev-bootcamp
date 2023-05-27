// function basics
function singSong() {
    console.log("DO");
    console.log("RE");
    console.log("MI");
}

singSong();
singSong();

function printHeart() {
    console.log("<3");
}
printHeart();

// function parameters
function greet(firstName) {
    console.log(`Hey there, ${firstName}!`);
}
greet((firstName = "Duy"));
greet("Tom");

function rant(message) {
    console.log(message.toUpperCase());
    console.log(message.toUpperCase());
    console.log(message.toUpperCase());
}
rant("I hate beets");

// multiple parameters
function greet2(firstName, lastName) {
    console.log(`Hey there, ${firstName} ${lastName[0]}.`);
}
greet2("Clooney", "George");

function repeat(str, numTimes) {
    let result = "";
    for (let i = 0; i < numTimes; i++) {
        result += str;
    }
    console.log(result);
}
repeat("$", 5);

function isSnakeEyes(num1, num2) {
    if (num1 === 1 && num2 === 1) {
        console.log("Snake Eyes!");
    } else {
        console.log("Not Snake Eyes!");
    }
}
isSnakeEyes(1, 1);
isSnakeEyes(1, 5);
isSnakeEyes(4, 5);

// return keyword
function add(x, y) {
    if (typeof x !== "number" || typeof y !== "number") {
        return false;
    } else {
        return x + y;
    }
}
console.log(add(1, "abc"));
console.log(add(1, 2));

function multiply(x, y) {
    return x * y;
}

function isShortsWeather(temperature) {
    if (temperature >= 75) {
        return true;
    } else {
        return false;
    }
}

function lastElement(arr) {
    if (arr.length === 0) {
        return null;
    } else {
        return arr[arr.length - 1];
    }
}

function capitalize(str) {
    return str[0].toUpperCase() + str.slice(1);
}

function sumArray(arr) {
    let sum = 0;
    for (let num of arr) {
        sum += num;
    }
    return sum;
}

function returnDay(day) {
    if (day < 1 || day > 7) {
        return null;
    } else {
        const days = [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
        ];
        return days[day - 1];
    }
}
