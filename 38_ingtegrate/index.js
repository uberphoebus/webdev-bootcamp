const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const env = require("dotenv");
const Product = require("./models/product");

// database settings
env.config();
mongoose
    .connect(process.env.URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        dbName: "farmStand",
    })
    .then(() => console.log(`[${"mongo".padEnd(7)}] connection open`))
    .catch((err) => {
        console.log("mongo connection error");
        console.log(err);
    });

// app settings
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

// app routes
app.get("/products", async (req, res) => {
    console.log(`[${"request".padEnd(7)}] ${"GET".padEnd(4)} /products`);
    const products = await Product.find({});
    res.render("products/index", { products });
});

app.get("/products/new", (req, res) => {
    console.log(`[${"request".padEnd(7)}] ${"GET".padEnd(4)} /products/new`);
    res.render("products/new");
});

app.post("/products", async (req, res) => {
    console.log(`[${"request".padEnd(7)}] ${"POST".padEnd(4)} /products`);
    const newProduct = new Product(req.body);
    await newProduct.save();
    console.log(
        `[${"request".padEnd(7)}] ${"POST".padEnd(4)} /products saved : ${
            newProduct.name
        }`
    );
    res.redirect(`products/${newProduct._id}`);
});

app.get("/products/:id", async (req, res) => {
    const { id } = req.params;
    console.log(`[${"request".padEnd(7)}] ${"GET".padEnd(4)} /products/${id}`);
    const product = await Product.findById(id);
    res.render("products/show", { product });
});

// app listen
app.listen(3000, () => {
    console.log(`[${"server".padEnd(7)}] on port 3000`);
});
