const input = document.querySelector("input");
const h1 = document.querySelector("h1");

// input.addEventListener("change", function (e) {
//     console.log("change");
// });

input.addEventListener("input", function (e) {
    h1.innerText = input.value;
});

const input2 = document.querySelectorAll("input")[1];
const h1New = document.querySelectorAll("h1")[1];

input2.addEventListener("input", function (e) {
    h1New.innerText = `Welcome, ${input2.value}`;
    if (input2.value === "") {
        h1New.innerText = "Enter Your Username";
    }
});
