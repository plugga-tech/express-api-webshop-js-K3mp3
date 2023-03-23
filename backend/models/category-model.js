const { ObjectId } = require("mongodb");
const { default: mongoose } = require("mongoose");

const categorySchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
});

module.exports = mongoose.model("categorySchema", categorySchema);