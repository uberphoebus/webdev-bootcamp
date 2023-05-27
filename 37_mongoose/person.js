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

const personSchema = new mongoose.Schema({
    first: String,
    last: String,
});

personSchema.virtual("fullName").get(function () {
    return `${this.first} ${this.last}`;
});

personSchema.pre("save", async function (next) {
    this.first = "YO";
    this.last = "MAMA";
    console.log("About to save!");
    next();
});

personSchema.post("save", async function () {
    console.log("Just saved!");
});

const Person = mongoose.model("Person", personSchema);
