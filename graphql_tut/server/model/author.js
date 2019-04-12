const mongoose = require("mongoose");
const Schema = require("mongoose").Schema;

const authorschema = new Schema({
    name:String,
    age:Number
});

module.exports = mongoose.model("author",authorschema);