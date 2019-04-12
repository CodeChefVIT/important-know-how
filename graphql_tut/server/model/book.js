const mongoose = require("mongoose");
const Schema = require("mongoose").Schema;

const bookschema = new Schema({
    name:String,
    genre:String,
    authorId:String
});

module.exports = mongoose.model("book",bookschema);