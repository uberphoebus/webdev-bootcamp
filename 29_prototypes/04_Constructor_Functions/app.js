//This functions makes and returns an object every time it is called.
// The resulting objects all follow the same "recipe"

function Color(r, g, b) {
    this.r = r;
    this.g = g;
    this.b = b;
}

Color.prototype.rgb = function () {
    const { r, g, b } = this;
    return `rgb(${r}, ${g}, ${b})`;
};

Color.prototype.hex = function () {
    const { r, g, b } = this;
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
};

Color.prototype.rgba = function (a = 1.0) {
    const { r, g, b } = this;
    return `rgba(${r}, ${g}, ${b}, ${a})`;
};

const color1 = new Color(40, 50, 60);
const color2 = new Color(0, 0, 0);
const color3 = new Color(40, 255, 60);
document.body.style.backgroundColor = color3.rgba(0.2);

console.log(color1.rgb());
console.log(color2.rgb());

console.log(color1.hex());
console.log(color2.hex());
console.log(color1.hex === color2.hex);

// color1.hex = #28323c
// color2.hex = #000000
// color1.hex === color2.hex = false
