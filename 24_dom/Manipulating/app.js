const allLinks = document.querySelectorAll("a");
for (let link of allLinks) {
    link.innerText = "I AM A LINK!!!!";
}

const temp = document.querySelector("h1").innerHTML;
console.log(temp);

// attributes
const att = document.querySelector("#banner").src;
console.log(att);

const firstLink = document.querySelector("a");
console.log(firstLink.herf);
console.log(firstLink.getAttribute("href"));

console.log(firstLink.title);
console.log(firstLink.getAttribute("title"));

firstLink.setAttribute("href", "https://www.google.com");
console.log(firstLink.getAttribute("href"));

const input = document.querySelector('input[type="text"]');
console.log(input.text);
console.log((input.type = "color"));
input.setAttribute("type", "text");

// style change
const h1 = document.querySelector("h1");
console.log(h1);
console.log(h1.style);

h1.style.color = "green";
h1.style.fontSize = "3em";
h1.style.border = "2px solid pink";

for (let link of allLinks) {
    link.style.color = "rgb(0, 108, 134)";
    link.style.textDecorationColor = "magenta";
    link.style.textDecorationStyle = "wavy";
}

console.log(window.getComputedStyle(h1).color);
console.log(window.getComputedStyle(h1).fontSize);
console.log(window.getComputedStyle(h1).marginLeft);

//  css class
const h2 = document.querySelector("h2");
h2.setAttribute("class", "border");

let currentClasses = h2.getAttribute("class");
console.log(currentClasses);
h2.setAttribute("class", `${currentClasses} purple`);

const h2New = document.querySelector("h2");
console.log(h2New.classList);
h2New.classList.add("purple");
h2New.classList.add("border");
h2New.classList.remove("border");
h2New.classList.contains("purple");
h2New.classList.toggle("purple");
h2New.classList.toggle("purple");

// properties
const firstBold = document.querySelector("b");
console.log(firstBold);
console.log(firstBold.parentElement);

const paragraph = firstBold.parentElement;
console.log(paragraph.childElementCount);
console.log(paragraph.children);
console.log(paragraph.children[0]);

const squareImg = document.querySelector(".square");
console.log(squareImg.nextSibling);
console.log(squareImg.nextElementSibling);

// creating elements
const newImg = document.createElement("img");
newImg.src =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Black_Labrador_Retriever_-_Male_IMG_3323.jpg/2560px-Black_Labrador_Retriever_-_Male_IMG_3323.jpg";
document.body.appendChild(newImg);
newImg.classList.add("square");

const newH3 = document.createElement("h3");
newH3.innerText = "I am new H3";
document.body.appendChild(newH3);

const p = document.querySelector("p");
p.append("I am new text yayyyyyyyyyyy!!!", "fjoweijfoaijoisdjfoi");

const newB = document.createElement("b");
newB.append("Hi");
console.log(newB);
p.prepend(newB);

const Newh2 = document.createElement("h2");
Newh2.append("Are adorable chickens");

const Newh1 = document.querySelector("h1");
Newh1.insertAdjacentElement("afterend", Newh2);

const h3 = document.createElement("h3");
h3.innerText = "I am new H3";
h1.after(h3);

const newButton = document.createElement("button");
newButton.innerText = "Click me";

for (let i = 0; i < 100; i++) {
    const newButton = document.createElement("button");
    newButton.innerText = "Click me";
    document.body.appendChild(newButton);
}

const firstLi = document.querySelector("li");
const ul = firstLi.parentElement;
ul.removeChild(firstLi);

const img = document.querySelector("img");
img.remove();
