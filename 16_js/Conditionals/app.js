console.log("BEFORE CONDITIONAL");
let random = Math.random();
if (random < 0.5) {
    console.log("YOUR NUMBER IS LESS THAN 0.5!!!");
} else {
    console.log("YOUR NUMBER IS GREATER THAN 0.5!!!");
}
console.log(random);

const dayOfWeek = "Tuesday";
if (dayOfWeek === "Monday") {
    console.log("UGHHH I HATE MONDAYS!");
} else if (dayOfWeek === "Saturday") {
    console.log("YAY I LOVE SATURDAYS!");
} else if (dayOfWeek === "Friday") {
    console.log("FRIDAYS ARE DECENT, ESPECIALLY AFTER WORK!");
} else {
    console.log("MEH");
}

// 0-5 - FREE
// 5 - 10 CHILD $10
// 10 - 65 ADULT $20
// 65+ SENIOR $10

const age = 8;
if (age < 5) {
    console.log("You are a baby.  You get in for free!");
} else if (age < 10) {
    console.log("You are a child.  You pay $10!");
} else if (age < 65) {
    console.log("You are an adult.  You pay $20!");
} else {
    console.log("You are a senior.  You pay $10!");
}

// password must be 6+ characters
const password = "234098234";
if (password.length >= 6) {
    console.log("LONG ENOUGH PASSWORD!");
    // password cannot include space
    if (password.indexOf(" ") === -1) {
        console.log("GOOD JOB!  NO SPACE!");
    } else {
        console.log("PASSWORD CANNOT CONTAIN SPACES!");
    }
} else {
    console.log("PASSWORD TOO SHORT!  MUST BE 6+ CHARACTERS");
}
