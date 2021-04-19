const express = require('express');
const updateQuizRouter = express.Router();
const QuizData = require('../src/model/Quizdata');


updateQuizRouter.post('/:id', (req, res) => {
    const id = req.params.id;
    QuizData.findById(id, (err, quizData) => {
        if (!quizData) {
            res.status(404).send("Record Not Found");
        } else {

            quizData.categoryName = req.body.categoryName,
                quizData.quizNo = req.body.quizNo,
                quizData.question = req.body.question,
                quizData.image1 = req.body.image1,
                quizData.image2 = req.body.image2,
                quizData.image3 = req.body.image3,
                quizData.image4 = req.body.image4,
                quizData.correctOption = req.body.correctOption,
                quizData.checkMessage = req.body.checkMessage


            quizData.save().then(quizData => {
                    console.log(quizData);

                })
                .catch(err => {
                    res.status(400).send("Unable to Update the Database");
                });
        }
    });
});

module.exports = updateQuizRouter;