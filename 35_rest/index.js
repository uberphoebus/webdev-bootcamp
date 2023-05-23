const express = require("express");
const app = express();
const path = require("path");

// data
const comments = [
    {
        username: "Todd",
        comment: "lol that is so funny!",
    },
    {
        username: "Skyler",
        comment: "I like to go birdwatching with my dog",
    },
    {
        username: "Sk8erBoi",
        comment: "Plz delete your account, Todd",
    },
    {
        username: "onlysayswoof",
        comment: "woof woof woof",
    },
];

// parsing middleware : express.json() and express.urlencoded() are used to parse the body of the request
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// setting ejs
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/comments", (req, res) => {
    res.render("comments/index", { comments });
});

// new comment form route
app.get("/comments/new", (req, res) => {
    res.render("comments/new");
});

// post form data to /comments
app.post("/comments", (req, res) => {
    const { username, comment } = req.body;
    comments.push({ username, comment });
    res.redirect("/comments");
});

app.get("/tacos", (req, res) => {
    res.send("GET /tacos response");
});

app.post("/tacos", (req, res) => {
    const { meat, qty } = req.body;
    res.send(`Here are your ${qty} ${meat} tacos`);
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
