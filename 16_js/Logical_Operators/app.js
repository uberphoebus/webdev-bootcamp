// =====================
// LOGICAL AND OPERATOR
// =====================
const password = "ejfoiwejfoiwejfo";
if (password.length >= 6 && password.indexOf(" ") === -1) {
    console.log("VALID PASSWORD!");
} else {
    console.log("INCORRECT FORMAT FOR PASSWORD!");
}

// =====================
// REVISITING AGE EXAMPLE
// =====================

// 0-5 free
// 5-10 $10
// 10-65 $20
// 65+ free

const age = 1000;
if ((age >= 0 && age < 5) || age >= 65) {
    console.log("FREE");
} else if (age >= 0 && age < 10) {
    console.log("$10");
} else if (age >= 0 && age < 65) {
    console.log("$20");
} else {
    console.log("INVALID AGE!");
}

// =====================
// NOT
// =====================
const firstName = "afjewoifjeaw";
if (!firstName) {
    console.log("ENTER YOUR FIRST NAME!");
}

// =====================
// COMBINING && and ||
// =====================
const age2 = 8;
if (!((age2 >= 0 && age2 < 5) || age2 >= 65)) {
    console.log("YOU ARE NOT A BABY OR A SENIOR!");
}

// =====================
// switch
// =====================
const day = 4;
switch (day) {
    case 1:
        console.log("MONDAY");
        break;
    case 2:
        console.log("TUESDAY");
        break;
    case 3:
        console.log("WEDNESDAY");
        break;
    case 4:
        console.log("THURSDAY");
        break;
    case 5:
        console.log("FRIDAY");
        break;
    case 6:
    case 7:
        console.log("WEEKEND");
    default:
        console.log("I DON'T KNOW THAT");
}
