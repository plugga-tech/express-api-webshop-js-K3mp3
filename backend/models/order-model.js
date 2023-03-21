const { ObjectId } = require("mongodb");
const { default: mongoose } = require("mongoose");

const newOrder = mongoose.Schema({
    user: {
        type: String, 
        required: true,
    },
    products: [
        {
            productId: {
                type: [mongoose.Types.ObjectId],
                ref: "Product",
                required: true,
            },
            quantity: { type: Number, required: true },
        }
    ]
});

module.exports = mongoose.model("orders", newOrder);