const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    lastName: String,
    password: String
});

const User = mongoose.model('user', userSchema);

module.exports = User;