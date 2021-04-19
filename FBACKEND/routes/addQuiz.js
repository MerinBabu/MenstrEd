const express = require('express');
const addQuizRouter = express.Router();
const Quizdata = require('../src/model/Quizdata');





addQuizRouter.post('/', (req, res) => {


    var quiz = {
        categoryName: req.body.quiz.categoryName,
        quizNo: req.body.quiz.quizNo,
        question: req.body.quiz.question,
        image1: req.body.quiz.image1,
        image2: req.body.quiz.image2,
        image3: req.body.quiz.image3,
        image4: req.body.quiz.image4,
        correctOption: req.body.quiz.correctOption,
        checkMessage: req.body.quiz.checkMessage

    }
    var quiz = Quizdata(quiz)
    quiz.save((err, quizData) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).send(quizData)
        }
    });

});



module.exports = addQuizRouter;