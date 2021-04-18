const express = require('express');
const userRouter = express.Router();
const jwt = require('jsonwebtoken');
const User = require('../src/model/SignUpdata');
adminUsername = "admin@gmail.com";
adminPassword = "123456";

userRouter.post('/register', (req, res) => {
    let userData = req.body;
    let user = new User(userData);
    user.save((err, regUser) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).send(regUser)
        }
    });
});

userRouter.post('/login', (req, res) => {
    let userData = req.body
    if (userData.email == adminUsername && userData.password == adminPassword) {
        let token = 'admin'
        res.status(200).send({ token });
    } else {
        User.findOne({ email: userData.email }, (err, user) => {
            if (err) {
                console.log(err)
            } else {
                if (!user) {
                    res.status(401).send('Invalid Email')
                } else {
                    if (user.password !== userData.password) {
                        res.status(401).send('Invalid Password')
                    } else {
                        let payload = { subject: user._id }
                        let token = jwt.sign(payload, 'secretKey');
                        res.status(200).send({ token });
                    }
                }
            }
        });
    }


});

module.exports = userRouter;