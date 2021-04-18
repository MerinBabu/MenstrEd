const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var NewCategorySchema = new Schema({
    categoryNo: Number,
    categoryName: String,
    imageName: String

});

var Categorydata = mongoose.model("categorys", NewCategorySchema);

module.exports = Categorydata;