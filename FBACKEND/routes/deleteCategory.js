const express = require('express');
const { deleteMany } = require('../src/model/Categorydata');
const deleteCategoryRouter = express.Router();
const CategoryData = require('../src/model/Categorydata');

deleteCategoryRouter.delete('/:id', (req, res) => {
    const id = req.params.id;
    CategoryData.findByIdAndRemove({ _id: id }, (err, catData) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).send(catData)
        }
    });
});

module.exports = deleteCategoryRouter;