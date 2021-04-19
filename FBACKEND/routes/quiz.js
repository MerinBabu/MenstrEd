const express = require('express');
const quizRouter = express.Router();
const Quizdata = require('../src/model/Quizdata');


quizRouter.get('/:catname', function(req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS');
    const catname = req.params.catname;
    Quizdata.find({ "categoryName": catname })
        .then(function(quiz) {
            res.send(quiz);
        });

});

module.exports = quizRouter;