const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");
const { v4: uuid } = require("uuid");

// data
const comments = [
    {
        id: uuid(),
        username: "Todd",
        comment: "lol that is so funny!",
    },
    {
        id: uuid(),
        username: "Skyler",
        comment: "I like to go birdwatching with my dog",
    },
    {
        id: uuid(),
        username: "Sk8erBoi",
        comment: "Plz delete your account, Todd",
    },
    {
        id: uuid(),
        username: "onlysayswoof",
        comment: "woof woof woof",
    },
];

// parsing middleware : express.json() and express.urlencoded() are used to parse the body of the request
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));

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
    comments.push({ username, comment, id: uuid() });
    res.redirect("/comments");
});

// get comment id
app.get("/comments/:id", (req, res) => {
    const { id } = req.params;
    const comment = comments.find((c) => c.id === id);
    res.render("comments/show", { comment });
});

app.get("/tacos", (req, res) => {
    res.send("GET /tacos response");
});

// update comment
app.patch("/comments/:id", (req, res) => {
    const { id } = req.params;
    const newCommentText = req.body.comment;
    const foundComment = comments.find((c) => c.id === id);
    foundComment.comment = newCommentText;
    res.redirect("/comments");
});

app.get("/comments/:id/edit", (req, res) => {
    const { id } = req.params;
    const comment = comments.find((c) => c.id === id);
    res.render("comments/edit", { comment: comment });
});

app.post("/tacos", (req, res) => {
    const { meat, qty } = req.body;
    res.send(`Here are your ${qty} ${meat} tacos`);
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
