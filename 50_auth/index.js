const express = require("express");
const app = express();
const User = require("./models/user");
const mongoose = require("mongoose");
const env = require("dotenv");
const bcrypt = require("bcrypt");
const session = require("express-session");

env.config();
mongoose
    .connect(process.env.URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        dbName: "authDemo",
    })
    .then(() => console.log(`[${"mongo".padEnd(7)}] connection open`))
    .catch((err) => {
        console.log("mongo connection error");
        console.log(err);
    });

app.set("view engine", "ejs");
app.set("views", "views");
app.use(express.urlencoded({ extended: true }));
app.use(session({ secret: "notagoodsecret" }));

const requireLogin = (req, res, next) => {
    if (!req.session.user_id) {
        return res.redirect("/login");
    }
    next();
};

app.get("/register", (req, res) => {
    res.render("register");
});

app.get("/", (req, res) => {
    res.send("This is the home page!");
});

app.post("/register", async (req, res) => {
    const { username, password } = req.body;
    const hash = await bcrypt.hash(password, 12);
    console.log(hash);
    const user = new User({
        username: username,
        password: hash,
    });
    await user.save();
    req.session.user_id = user._id;
    res.redirect("/");
});

app.get("/login", (req, res) => {
    res.render("login");
});

app.post("/login", async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username: username });
    const validPassword = await bcrypt.compare(password, user.password);
    if (validPassword) {
        req.session.user_id = user._id;
        res.redirect("/secret");
    } else {
        res.redirect("/login");
    }
});

app.post("/logout", (req, res) => {
    // req.session.user_id = null;
    req.session.destroy();
    res.redirect("/login");
});

app.get("/secret", requireLogin, (req, res) => {
    res.render("secret");
});

app.listen(3000, (req, res) => {
    console.log("Listening on port 3000");
});
