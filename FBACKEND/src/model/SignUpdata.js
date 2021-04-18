const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SignUpSchema = new Schema({
    name: String,
    email: String,
    phoneno: String,
    password: String
});

var Userdata = mongoose.model('userdata', SignUpSchema);

module.exports = Userdata;