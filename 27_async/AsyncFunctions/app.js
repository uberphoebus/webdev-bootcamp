// async returns a promise
async function hello() {}

const sing = async () => {
    throw "OH NO, PROBLEM!";
    return "LA LA LA LA";
};

sing()
    .then((data) => {
        console.log("Promise resolved with:", data);
    })
    .catch((err) => {
        console.log("Promise rejected with:", err);
    });

const login = async (username, password) => {
    if (!username || !password) throw "Missing Credentials";
    if (password === "corgifeetarecute") return "Welcome!";
    throw "Invalid Password";
};

login("fjwqoiefjwe", "corgifeetarecute")
    .then((msg) => {
        console.log("Logged in!");
        console.log(msg);
    })
    .catch((err) => {
        console.log("Error!");
        console.log(err);
    });

// await
const delayedColorChange = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay);
    });
};

delayedColorChange("red", 1000)
    .then(() => delayedColorChange("orange", 1000))
    .then(() => delayedColorChange("yellow", 1000))
    .then(() => delayedColorChange("green", 1000))
    .then(() => delayedColorChange("blue", 1000))
    .then(() => delayedColorChange("indigo", 1000))
    .then(() => delayedColorChange("violet", 1000));

async function rainbow() {
    await delayedColorChange("red", 1000);
    await delayedColorChange("orange", 1000);
    await delayedColorChange("yellow", 1000);
    await delayedColorChange("green", 1000);
    await delayedColorChange("blue", 1000);
    await delayedColorChange("indigo", 1000);
    await delayedColorChange("violet", 1000);
    return "ALL DONE!";
}

// rainbow().then((data) => console.log(data));
async function printRainbow() {
    await rainbow();
    console.log("END OF RAINBOW!");
}
printRainbow();

const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * 4500) + 500;
        setTimeout(() => {
            if (delay > 2000) {
                reject("Connection Timeout :(");
            } else {
                resolve(`Here is your fake data from ${url}`);
            }
        }, delay);
    });
};

async function makeTwoRequests() {
    try {
        let data1 = await fakeRequest("/page1");
        console.log(data1);
        let data2 = await fakeRequest("/page2");
        console.log(data2);
    } catch (e) {
        console.log("Caught an error!");
        console.log("error is:", e);
    }
}
