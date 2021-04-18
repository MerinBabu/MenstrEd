const express = require('express');
const updateCategoryRouter = express.Router();
const CategoryData = require('../src/model/Categorydata');


updateCategoryRouter.post('/:id', (req, res) => {
    const id = req.params.id;
    CategoryData.findById(id, (err, catData) => {
        if (!catData) {
            res.status(404).send("Record Not Found");
        } else {
            catData.categoryNo = req.body.categoryNo,
                catData.categoryName = req.body.categoryName,
                catData.imageName = req.body.imageName,

                catData.save().then(catData => {
                    console.log(catData);

                })
                .catch(err => {
                    res.status(400).send("Unable to Update the Database");
                });
        }
    });
});

module.exports = updateCategoryRouter;