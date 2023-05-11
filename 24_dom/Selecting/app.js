const banner = document.getElementById("banner");
console.log(banner);

const allImages = document.getElementsByTagName("img");
for (let img of allImages) {
    console.log(img.src);
    // img.src =
    //     "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg";
}

const squareImages = document.getElementsByClassName("square");
for (let img of squareImages) {
    img.src =
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg";
}

console.log(document.getElementsByTagName("p").length);

console.log(document.querySelector("#banner"));
console.log(document.querySelector(".square"));
console.log(document.querySelector("img:nth-of-type(2)"));
console.log(document.querySelector("a[title='Java']"));

console.log(document.querySelectorAll("p").length);
console.log(document.querySelectorAll("a"));
console.log(document.querySelectorAll("p a"));

const links = document.querySelectorAll("p a");
for (let link of links) {
    console.log(link.href);
}
