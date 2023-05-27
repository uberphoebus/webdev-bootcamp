const path = require("path");
const env = require("dotenv");
const express = require("express");
const methodOverride = require("method-override");
const mongoose = require("mongoose");
const app = express();
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
app.use(methodOverride("_method"));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

const log_routes = (req, res, action = "") => {
    console.log(
        `[${"request".padEnd(7)}] ${req.method.padEnd(4)} ${req.url} ${action}`
    );
};

// app routes
app.get("/products", async (req, res) => {
    log_routes(req, res);
    // console.log(`[${"request".padEnd(7)}] ${"GET".padEnd(4)} /products`);
    const products = await Product.find({});
    res.render("products/index", { products });
});

app.get("/products/new", (req, res) => {
    log_routes(req, res);
    res.render("products/new");
});

app.post("/products", async (req, res) => {
    log_routes(req, res);
    const newProduct = new Product(req.body);
    await newProduct.save();
    log_routes(req, res, `saved: ${newProduct.name}`);
    res.redirect(`products/${newProduct._id}`);
});

app.get("/products/:id", async (req, res) => {
    const { id } = req.params;
    log_routes(req, res);
    const product = await Product.findById(id);
    res.render("products/show", { product });
});

app.get("/products/:id/edit", async (req, res) => {
    const { id } = req.params;
    log_routes(req, res);
    const product = await Product.findById(id);
    res.render("products/edit", { product });
});

app.put("/products/:id", async (req, res) => {
    const { id } = req.params;
    log_routes(req, res);
    Product.findByIdAndUpdate(id, req.body, { runValidators: true });
    log_routes(req, res, `updated: ${req.body.name}`);
    res.send("PUT");
});

// app listen
app.listen(3000, () => {
    console.log(`[${"server".padEnd(7)}] on port 3000`);
});
