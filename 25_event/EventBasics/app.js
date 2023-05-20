const btn = document.querySelector("#v2");
btn.onclick = function () {
    console.log("YOU CLICKED ME!");
    console.log("I HOPE IT WORKED!!");
};

const scream = () => {
    console.log("AAAAAHHHHH");
    console.log("STOP TOUCHING ME!");
};
btn.onmouseenter = scream;

document.querySelector("h1").onclick = () => {
    alert("you clicked the h1!");
};

const btn3 = document.querySelector("#v3");
btn3.addEventListener("click", function () {
    alert("CLICKED!");
});

// why use addEventListener?
function twist() {
    console.log("TWIST!");
}
function shout() {
    console.log("SHOUT!");
}

const tasButton = document.querySelector("#tas");
tasButton.addEventListener("click", twist, { once: true });
tasButton.addEventListener("click", shout);

const buttons = document.querySelectorAll("button");
for (let button of buttons) {
    button.addEventListener("click", function () {
        console.log(`${button.id}`);
    });
}

const makeRandColor = () => {
    const r = Math.floor(Math.random() * 255 + 1);
    const g = Math.floor(Math.random() * 255 + 1);
    const b = Math.floor(Math.random() * 255 + 1);
    return `rgb(${r}, ${g}, ${b})`;
};

const body = document.querySelector("body");
const colorButton = document.querySelector("#color");
const h2Color = document.querySelector("h2");
colorButton.addEventListener("click", function () {
    const newColor = makeRandColor();
    body.style.backgroundColor = `${newColor}`;
    h2Color.innerText = `${newColor}`;
});
