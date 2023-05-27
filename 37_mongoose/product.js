const mongoose = require("mongoose");
const env = require("dotenv");

env.config();
mongoose
    .connect(process.env.URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        dbName: "shopApp",
    })
    .then(() => console.log("connection open"))
    .catch((err) => {
        console.log("connection error");
        console.log(err);
    });

// model schema
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 20,
    },
    price: {
        type: Number,
        required: true,
        min: [0, "Price must be positive ya dodo!"],
    },
    onSale: {
        type: Boolean,
        default: false,
    },
    categories: [String],
    qty: {
        online: {
            type: Number,
            default: 0,
        },
        inStore: {
            type: Number,
            default: 0,
        },
    },
    size: {
        type: String,
        enum: ["S", "M", "L"],
    },
});

// instance method
productSchema.methods.greet = function () {
    console.log("Hello!");
    console.log(`- from ${this.name}`);
};

productSchema.methods.toggleOnSale = function () {
    this.onSale = !this.onSale;
    return this.save();
};

productSchema.methods.addCategory = function (newCat) {
    this.categories.push(newCat);
    return this.save();
};

// static method
productSchema.statics.fireSale = function () {
    return this.updateMany({}, { onSale: true, price: 0 });
};

// model
const Product = mongoose.model("Product", productSchema);

// instance
const findProduct = async () => {
    const foundProduct = await Product.findOne({ name: "Mountain Bike" });
    console.log(foundProduct);
    await foundProduct.toggleOnSale();
    console.log(foundProduct);
    await foundProduct.addCategory("Outdoors");
    console.log(foundProduct);
};

Product.fireSale().then((res) => console.log(res));

// findProduct();

// const bike = new Product({
//     name: "Cycling Jersey",
//     price: 28.5,
//     categories: ["Cycling"],
//     size: "XS",
// });
// bike.save()
//     .then((data) => {
//         console.log("it worked");
//         console.log(data);
//     })
//     .catch((err) => {
//         console.log("oh no error");
//         console.log(err);
//     });

// Product.findOneAndUpdate(
//     { name: "Tire Pump" },
//     { price: -19.99 },
//     { new: true, runValidators: true }
// )
//     .then((data) => {
//         console.log("it worked");
//         console.log(data);
//     })
//     .catch((err) => {
//         console.log("oh no error");
//         console.log(err);
//     });
