class Color {
    constructor(r, g, b, name) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.name = name;
    }
    greet() {
        return `Hello from ${this.name}!`;
    }
    innerRGB() {
        const { r, g, b } = this;
        return `${r}, ${g}, ${b}`;
    }
    rgb() {
        return `rgb(${this.innerRGB()})`;
    }
    rgba(a = 1.0) {
        return `rgba(${this.innerRGB()}, ${a})`;
    }
    hex() {
        const { r, g, b } = this;
        return (
            "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
        );
    }
}

const red = new Color(255, 67, 89, "tomato");
const white = new Color(255, 255, 255, "white");

console.log(red.greet());
console.log(white.greet());
console.log(red.rgb());
console.log(red.hex());

console.log(red.hex === white.hex);
console.log(red.hex() === white.hex());

document.body.style.backgroundColor = red.rgba(0.5);
