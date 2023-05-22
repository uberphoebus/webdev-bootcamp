const fs = require("fs");
const folderName = process.argv[2] || "project";

// async version
fs.mkdir("dogs", { recursive: true }, (err) => {
    if (err) throw err;
});
console.log("I come after mkdir in the file!");

// sync version
try {
    fs.mkdirSync(folderName, { recursive: true }, (err) => {
        if (err) throw err;
    });
    console.log("I come after mkdir in the file!");

    fs.writeFileSync(`${folderName}/index.html`, "");
    fs.writeFileSync(`${folderName}/app.js`, "");
    fs.writeFileSync(`${folderName}/styles.css`, "");
} catch (error) {
    console.log("Something went wrong!");
    console.log(error);
}
