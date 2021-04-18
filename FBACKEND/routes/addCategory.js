const express = require('express');
const multer = require('multer');
const addCategoryRouter = express.Router();
const Categorydata = require('../src/model/Categorydata');

// const storage = multer.diskStorage({
//     destination: function(req, file, cb) {
//         cb(null, './public/images/');
//     },
//     filename: function(req, file, cb) {
//         cb(null, file.fieldname + '-' + Date.now());
//     }
// });
// const upload = multer({ storage: storage });



addCategoryRouter.post('/', (req, res) => {
    // if (!req.file) {
    //     console.log('No file received');
    //     return res.send({
    //         success: false
    //     });
    // } else {
    //     console.log('File is available');
    //     return res.send({
    //         success: true
    //     });
    // }

    var category = {
        categoryNo: req.body.category.categoryNo,
        categoryName: req.body.category.categoryName,
        imageName: req.body.category.imageName

    }
    var category = Categorydata(category)
    category.save((err, catData) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).send(catData)
        }
    });

});



module.exports = addCategoryRouter;