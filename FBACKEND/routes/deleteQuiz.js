const express = require('express');
const { deleteMany } = require('../src/model/Categorydata');
const deleteQuizRouter = express.Router();
const QuizData = require('../src/model/Quizdata');

deleteQuizRouter.delete('/:id', (req, res) => {
    const id = req.params.id;
    QuizData.findByIdAndRemove({ _id: id }, (err, quizData) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).send(quizData)
        }
    });
});

module.exports = deleteQuizRouter;