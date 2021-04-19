const express = require("express");
const cors = require("cors");
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
var bodyparser = require('body-parser');
const port = process.env.PORT || 3000;
var app = new express();
app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
    extended: false
}));
// mongoose.connect('mongodb://localhost:27017/MenstrEd')
mongoose.connect('mongodb+srv://userone:userone@ictakfiles.vfcnk.mongodb.net/MenstrEd?retryWrites=true&w=majority')

const userRouter = require('./routes/user');
const categoryRouter = require('./routes/category');
const addCategoryRouter = require('./routes/addCategory');
const updateCategoryRouter = require('./routes/updateCategory');
const deleteCategoryRouter = require('./routes/deleteCategory');
const quizRouter = require('./routes/quiz');
const addQuizRouter = require('./routes/addQuiz');
const updateQuizRouter = require("./routes/updateQuiz");
const deleteQuizRouter = require('./routes/deleteQuiz');


app.use('/auth', userRouter);
app.use('/category', categoryRouter);
app.use('/addcategory', addCategoryRouter);
app.use('/updatecategory', updateCategoryRouter);
app.use('/deletecategory', deleteCategoryRouter);
app.use('/quiz', quizRouter);
app.use('/addquiz', addQuizRouter);
app.use('/updatequiz', updateQuizRouter);
app.use('/deletequiz', deleteQuizRouter);


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

app.listen(port, function() {
    console.log("Port listening at " + port);
});