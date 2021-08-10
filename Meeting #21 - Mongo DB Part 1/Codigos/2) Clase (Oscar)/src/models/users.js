const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: String,
    firstaname: String,
    lastanme: String,
    password: String
})


module.exports = {
    createModel() {
        const User = mongoose.model('User', userSchema);
        return User;
    }
}