const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    userId: Number,
    name: String,
    phone: Number,
    coffeeDate: Date
})

const UserModel = mongoose.model('users', UserSchema);
module.exports = UserModel;