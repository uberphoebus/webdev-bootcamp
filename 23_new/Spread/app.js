const nums = [13, 4, 5, 21, 3, 3, 1, 2, 7, 6, 4, 2, 53456];
// SPREAD IN FUNCTIONS
console.log(Math.max(nums)); //NaN
console.log(Math.max(...nums)); //53456

console.log(nums);
console.log(...nums);

console.log("hello");
console.log(..."hello");

// SPREAD IN ARRAYS
const cats = ["Blue", "Scout", "Rocket"];
const dogs = ["Rusty", "Wyatt"];

const allPets = [...cats, ...dogs, "Speedy"];
console.log(allPets);

// SPREAD IN OBJECTS
const feline = { legs: 4, family: "Felidae" };
const canine = { isFurry: true, family: "Caninae" };

const catDog = { ...feline, ...canine, family: "Colt" };
console.log(catDog);

console.log({ ...[2, 4, 6, 8] });

const dataFromForm = {
    email: "blueman@gmail.com",
    password: "tobias123!",
    username: "tfunke",
};
const newUser = { ...dataFromForm, id: 2345, isAdmin: false };
console.log(newUser);
