const express = require('express');
const categoryRouter = express.Router();
const Categorydata = require('../src/model/Categorydata');


categoryRouter.get('', function(req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS');
    Categorydata.find()
        .then(function(categories) {
            res.send(categories);
        });

});

module.exports = categoryRouter;