const express = require("express");
const app = express();

// console.dir(app);

// catch request
// app.use((req, res) => {
//     console.log("WE GOT A NEW REQUEST!!!");
//     // res.send("HELLO, WE GOT YOUR REQUEST! THIS IS A RESPONSE!");
//     // res.send({ color: "red" });
//     res.send("<h1>This is my webpage!</h1>");
// });

// routing
app.get("/", (req, res) => {
    console.log(`[${"request".padEnd(7)}] /`);
    res.send("Welcome to the home page!");
});

app.get("/r/:suberddit", (req, res) => {
    const { suberddit } = req.params;
    res.send(`<h1>Browsing the ${suberddit} subreddit</h1>`);
});

app.get("/r/:suberddit/:postId", (req, res) => {
    const { suberddit, postId } = req.params;
    res.send(
        `<h1>Viewing Post ID: ${postId} on the ${suberddit} subreddit</h1>`
    );
});

app.post("/cats", (req, res) => {
    console.log(`[${"request".padEnd(7)}] POST /cats`);
    res.send("POST REQUEST TO /cats!!!! THIS IS DIFFERENT THAN A GET REQUEST");
});

app.get("/cats", (req, res) => {
    console.log(`[${"request".padEnd(7)}] /cats`);
    res.send("MEOW!!!");
});

app.get("/dogs", (req, res) => {
    console.log(`[${"request".padEnd(7)}] /dogs`);
    res.send("WOOF!!!");
});

app.get("/search", (req, res) => {
    const { q } = req.query;
    if (!q) {
        res.send("Nothing found if nothing searched!");
    }
    res.send(`<h1>Search results for: ${q}</h1>`);
});

app.get("*", (req, res) => {
    console.log(`[${"request".padEnd(7)}] *`);
    res.send("I don't know that path!");
});

// start server
app.listen(8080, () => {
    console.log(`[${"server".padEnd(7)}] listening on port 8080`);
});
