const { ObjectId } = require("mongodb");
const { default: mongoose } = require("mongoose");

const storeUser = mongoose.Schema({
    username: String,
    password: String,
    email: String
});

module.exports = mongoose.model("storeUser", storeUser);