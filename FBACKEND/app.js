const express = require("express");
const cors = require("cors");
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
var bodyparser = require('body-parser');
var app = new express();
app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
    extended: false
}));
mongoose.connect('mongodb://localhost:27017/MenstrEd')

const userRouter = require('./routes/user');
const categoryRouter = require('./routes/category');
const addCategoryRouter = require('./routes/addCategory');
const updateCategoryRouter = require('./routes/updateCategory');


app.use('/auth', userRouter);
app.use('/category', categoryRouter);
app.use('/addcategory', addCategoryRouter);
app.use('/updatecategory', updateCategoryRouter);


function verifyToken(req, res, next) {

    if (!req.headers.authorization) {
        return res.status(401).send('Unauthorized request');
    }
    let token = req.headers.authorization.split('')[1];
    if (token == 'null') {
        return res.status(401).send('Unauthorized request');
    }
    let payload = jwt.verify(token, 'secretKey');
    console.log(payload);
    if (!payload) {
        return res.status(401).send('Unauthorized request');
    }
    req.userId = payload.subject;
    next();

}

// app.post('/login', (req, res) => {
//     let userData = req.body;

//     if (!username) {
//         res.status(401).send("Invalid username");
//     } else if (password !== userData.password) {
//         res.status(401).send("Invalid password");

//     } else {
//         let payload = { subject: username + password }
//         let token = jwt.sign(payload, 'secretKey');
//         res.status(200).send({ token });
//     }
// });

app.listen(3000, function() {
    console.log("Port listening at 3000");
});