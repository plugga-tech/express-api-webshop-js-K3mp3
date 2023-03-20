const { ObjectId } = require("mongodb");
const { default: mongoose } = require("mongoose");

const storeProduct = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    stock: {
        type: Number,
        required: true
    },
});

module.exports = mongoose.model("storeProduct", storeProduct);