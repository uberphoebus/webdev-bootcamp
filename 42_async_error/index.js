const path = require("path");
const env = require("dotenv");
const express = require("express");
const methodOverride = require("method-override");
const mongoose = require("mongoose");
const app = express();
const Product = require("./models/product");
const AppError = require("./AppError");

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

const categories = ["fruit", "vegetable", "dairy", "fungi"];

function wrapAsync(fn) {
    return function (req, res, next) {
        fn(req, res, next).catch((e) => next(e));
    };
}

// app routes
app.get(
    "/products",
    wrapAsync(async (req, res, next) => {
        log_routes(req, res);
        const { category } = req.query;
        if (category) {
            const products = await Product.find({ category });
            res.render("products/index", { products, category });
        } else {
            const products = await Product.find({});
            res.render("products/index", { products, category: "All" });
        }
    })
);

app.get("/products/new", (req, res) => {
    log_routes(req, res);
    res.render("products/new", { categories });
});

app.post(
    "/products",
    wrapAsync(async (req, res, next) => {
        log_routes(req, res);
        const newProduct = new Product(req.body);
        await newProduct.save();
        log_routes(req, res, `saved: ${newProduct.name}`);
        res.redirect(`products/${newProduct._id}`);
    })
);

app.get(
    "/products/:id",
    wrapAsync(async (req, res, next) => {
        const { id } = req.params;
        log_routes(req, res);
        const product = await Product.findById(id);
        if (!product) {
            throw new AppError("Product not found", 404);
        }
        res.render("products/show", { product });
    })
);

app.get(
    "/products/:id/edit",
    wrapAsync(async (req, res, next) => {
        const { id } = req.params;
        log_routes(req, res);
        const product = await Product.findById(id);
        if (!product) {
            throw new AppError("Product not found", 404);
        }
        res.render("products/edit", { product, categories });
    })
);

app.put(
    "/products/:id",
    wrapAsync(async (req, res, next) => {
        const { id } = req.params;
        log_routes(req, res);
        const product = await Product.findByIdAndUpdate(id, req.body, {
            runValidators: true,
            new: true,
        });
        log_routes(req, res, `updated: ${req.body.name}`);
        res.redirect(`/products/${product._id}`);
    })
);

app.delete(
    "/products/:id",
    wrapAsync(async (req, res) => {
        const { id } = req.params;
        log_routes(req, res);
        const deletedProduct = await Product.findByIdAndDelete(id);
        log_routes(req, res, `deleted: ${deletedProduct.name}`);
        res.redirect("/products");
    })
);

const handleValidationError = (err) => {
    console.dir(err);
    return new AppError(`Validation failed... ${err.message}`, 400);
};

app.use((err, req, res, next) => {
    console.log(err.name);
    if (err.name === "ValidationError") err = handleValidationError(err);
    next(err);
});

app.use((err, req, res, next) => {
    const { status = 500, message = "Something went wrong" } = err;
    res.status(status).send(message);
});

// app listen
app.listen(3000, () => {
    console.log(`[${"server".padEnd(7)}] on port 3000`);
});
