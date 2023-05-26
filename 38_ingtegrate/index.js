const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const env = require("dotenv");

const Product = require("./models/product");

env.config();
mongoose
    .connect(process.env.URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        dbName: "farmStand",
    })
    .then(() => console.log("mongo connection open"))
    .catch((err) => {
        console.log("mongo connection error");
        console.log(err);
    });

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/dog", (res, req) => {
    res.send("WOOF!");
});

app.listen(3000, () => {
    console.log("Listening on port 3000");
});
