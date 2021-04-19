const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var QuizSchema = new Schema({
    categoryName: String,
    quizNo: Number,
    question: String,
    image1: String,
    image2: String,
    image3: String,
    image4: String,
    correctOption: Number,
    checkMessage: String

});

var Quizdata = mongoose.model("quizs", QuizSchema);

module.exports = Quizdata;